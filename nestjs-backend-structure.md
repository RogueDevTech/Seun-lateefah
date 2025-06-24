# NestJS Backend Structure for Bricklage Organization Documents

## Project Structure

```
src/
├── main.ts
├── app.module.ts
├── config/
│   ├── database.config.ts
│   ├── multer.config.ts
│   └── jwt.config.ts
├── modules/
│   ├── auth/
│   │   ├── auth.module.ts
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── guards/
│   │   │   ├── jwt-auth.guard.ts
│   │   │   └── roles.guard.ts
│   │   ├── decorators/
│   │   │   ├── current-user.decorator.ts
│   │   │   └── roles.decorator.ts
│   │   └── strategies/
│   │       └── jwt.strategy.ts
│   ├── users/
│   │   ├── users.module.ts
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   ├── entities/
│   │   │   └── user.entity.ts
│   │   └── dto/
│   │       ├── create-user.dto.ts
│   │       └── update-user.dto.ts
│   ├── organizations/
│   │   ├── organizations.module.ts
│   │   ├── organizations.controller.ts
│   │   ├── organizations.service.ts
│   │   ├── entities/
│   │   │   └── organization.entity.ts
│   │   └── dto/
│   │       ├── create-organization.dto.ts
│   │       └── update-organization.dto.ts
│   └── documents/
│       ├── documents.module.ts
│       ├── documents.controller.ts
│       ├── documents.service.ts
│       ├── entities/
│       │   └── document.entity.ts
│       └── dto/
│           ├── create-document.dto.ts
│           ├── update-document.dto.ts
│           └── upload-document.dto.ts
├── common/
│   ├── decorators/
│   │   └── api-response.decorator.ts
│   ├── filters/
│   │   └── http-exception.filter.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   ├── interceptors/
│   │   └── transform.interceptor.ts
│   └── pipes/
│       └── validation.pipe.ts
└── utils/
    ├── file-upload.util.ts
    └── pagination.util.ts
```

## Database Entities

### User Entity

```typescript
// src/modules/users/entities/user.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Organization } from "../../organizations/entities/organization.entity";
import { Document } from "../../documents/entities/document.entity";

export enum UserRole {
  ADMIN = "admin",
  ORGANIZATION = "organization",
  USER = "user",
}

export enum UserType {
  BUYER = "buyer",
  OWNER = "owner",
  BROKER = "broker",
  DEVELOPER = "developer",
}

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserType,
    default: UserType.BUYER,
  })
  userType: UserType;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;

  @Column({ nullable: true })
  organizationId: string;

  @ManyToOne(() => Organization, (organization) => organization.users)
  organization: Organization;

  @OneToMany(() => Document, (document) => document.uploadedBy)
  documents: Document[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

### Organization Entity

```typescript
// src/modules/organizations/entities/organization.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Document } from "../../documents/entities/document.entity";

@Entity("organizations")
export class Organization {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  website: string;

  @Column({ default: false })
  isVerified: boolean;

  @OneToMany(() => User, (user) => user.organization)
  users: User[];

  @OneToMany(() => Document, (document) => document.organization)
  documents: Document[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

### Document Entity

```typescript
// src/modules/documents/entities/document.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Organization } from "../../organizations/entities/organization.entity";

export enum DocumentType {
  CONTRACT = "contract",
  IDENTITY = "identity",
  FINANCIAL = "financial",
  PROPERTY = "property",
  LEGAL = "legal",
  OTHER = "other",
}

export enum DocumentStatus {
  PENDING = "pending",
  APPROVED = "approved",
  REJECTED = "rejected",
}

@Entity("documents")
export class Document {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fileName: string;

  @Column()
  originalName: string;

  @Column()
  mimeType: string;

  @Column()
  fileSize: number;

  @Column()
  filePath: string;

  @Column({
    type: "enum",
    enum: DocumentType,
    default: DocumentType.OTHER,
  })
  documentType: DocumentType;

  @Column({
    type: "enum",
    enum: DocumentStatus,
    default: DocumentStatus.PENDING,
  })
  status: DocumentStatus;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  tags: string;

  @Column()
  uploadedById: string;

  @ManyToOne(() => User, (user) => user.documents)
  uploadedBy: User;

  @Column({ nullable: true })
  organizationId: string;

  @ManyToOne(() => Organization, (organization) => organization.documents)
  organization: Organization;

  @Column({ nullable: true })
  reviewedById: string;

  @ManyToOne(() => User)
  reviewedBy: User;

  @Column({ nullable: true })
  reviewNotes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
```

## DTOs (Data Transfer Objects)

### Create Document DTO

```typescript
// src/modules/documents/dto/create-document.dto.ts
import { IsString, IsEnum, IsOptional, IsUUID } from "class-validator";
import { DocumentType } from "../entities/document.entity";

export class CreateDocumentDto {
  @IsString()
  fileName: string;

  @IsString()
  originalName: string;

  @IsString()
  mimeType: string;

  @IsString()
  filePath: string;

  @IsEnum(DocumentType)
  documentType: DocumentType;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  tags?: string;

  @IsOptional()
  @IsUUID()
  organizationId?: string;
}
```

### Update Document DTO

```typescript
// src/modules/documents/dto/update-document.dto.ts
import { PartialType } from "@nestjs/mapped-types";
import { CreateDocumentDto } from "./create-document.dto";

export class UpdateDocumentDto extends PartialType(CreateDocumentDto) {}
```

### Upload Document DTO

```typescript
// src/modules/documents/dto/upload-document.dto.ts
import { IsEnum, IsOptional, IsString } from "class-validator";
import { DocumentType } from "../entities/document.entity";

export class UploadDocumentDto {
  @IsEnum(DocumentType)
  documentType: DocumentType;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  tags?: string;
}
```

## Controllers

### Documents Controller

```typescript
// src/modules/documents/documents.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/guards/jwt-auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { Roles } from "../auth/decorators/roles.decorator";
import { CurrentUser } from "../auth/decorators/current-user.decorator";
import { DocumentsService } from "./documents.service";
import { CreateDocumentDto } from "./dto/create-document.dto";
import { UpdateDocumentDto } from "./dto/update-document.dto";
import { UploadDocumentDto } from "./dto/upload-document.dto";
import { User } from "../users/entities/user.entity";

@ApiTags("documents")
@Controller("documents")
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class DocumentsController {
  constructor(private readonly documentsService: DocumentsService) {}

  @Post("upload")
  @Roles("organization", "admin")
  @UseInterceptors(FileInterceptor("file"))
  @ApiOperation({ summary: "Upload a document" })
  @ApiResponse({ status: 201, description: "Document uploaded successfully" })
  async uploadDocument(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10 * 1024 * 1024 }), // 10MB
          new FileTypeValidator({ fileType: ".(pdf|doc|docx|jpg|jpeg|png)" }),
        ],
      })
    )
    file: Express.Multer.File,
    @Body() uploadDocumentDto: UploadDocumentDto,
    @CurrentUser() user: User
  ) {
    return this.documentsService.uploadDocument(file, uploadDocumentDto, user);
  }

  @Get("organization/:organizationId")
  @Roles("organization", "admin")
  @ApiOperation({ summary: "Get all documents for an organization" })
  @ApiResponse({ status: 200, description: "Documents retrieved successfully" })
  async getOrganizationDocuments(
    @Param("organizationId") organizationId: string,
    @Query("page") page: number = 1,
    @Query("limit") limit: number = 10,
    @Query("documentType") documentType?: string,
    @Query("status") status?: string,
    @CurrentUser() user: User
  ) {
    return this.documentsService.getOrganizationDocuments(
      organizationId,
      { page, limit, documentType, status },
      user
    );
  }

  @Get(":id")
  @Roles("organization", "admin")
  @ApiOperation({ summary: "Get a specific document" })
  @ApiResponse({ status: 200, description: "Document retrieved successfully" })
  async getDocument(@Param("id") id: string, @CurrentUser() user: User) {
    return this.documentsService.getDocument(id, user);
  }

  @Put(":id")
  @Roles("organization", "admin")
  @ApiOperation({ summary: "Update a document" })
  @ApiResponse({ status: 200, description: "Document updated successfully" })
  async updateDocument(
    @Param("id") id: string,
    @Body() updateDocumentDto: UpdateDocumentDto,
    @CurrentUser() user: User
  ) {
    return this.documentsService.updateDocument(id, updateDocumentDto, user);
  }

  @Delete(":id")
  @Roles("organization", "admin")
  @ApiOperation({ summary: "Delete a document" })
  @ApiResponse({ status: 200, description: "Document deleted successfully" })
  async deleteDocument(@Param("id") id: string, @CurrentUser() user: User) {
    return this.documentsService.deleteDocument(id, user);
  }

  @Put(":id/status")
  @Roles("admin")
  @ApiOperation({ summary: "Update document status (admin only)" })
  @ApiResponse({
    status: 200,
    description: "Document status updated successfully",
  })
  async updateDocumentStatus(
    @Param("id") id: string,
    @Body("status") status: string,
    @Body("reviewNotes") reviewNotes?: string,
    @CurrentUser() user: User
  ) {
    return this.documentsService.updateDocumentStatus(
      id,
      status,
      reviewNotes,
      user
    );
  }

  @Get(":id/download")
  @Roles("organization", "admin")
  @ApiOperation({ summary: "Download a document" })
  @ApiResponse({ status: 200, description: "Document downloaded successfully" })
  async downloadDocument(@Param("id") id: string, @CurrentUser() user: User) {
    return this.documentsService.downloadDocument(id, user);
  }
}
```

## Services

### Documents Service

```typescript
// src/modules/documents/documents.service.ts
import {
  Injectable,
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Document, DocumentStatus } from "./entities/document.entity";
import { User, UserRole } from "../users/entities/user.entity";
import { CreateDocumentDto } from "./dto/create-document.dto";
import { UpdateDocumentDto } from "./dto/update-document.dto";
import { UploadDocumentDto } from "./dto/upload-document.dto";
import { FileUploadUtil } from "../../utils/file-upload.util";

@Injectable()
export class DocumentsService {
  constructor(
    @InjectRepository(Document)
    private documentsRepository: Repository<Document>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private fileUploadUtil: FileUploadUtil
  ) {}

  async uploadDocument(
    file: Express.Multer.File,
    uploadDocumentDto: UploadDocumentDto,
    user: User
  ) {
    // Validate file
    if (!file) {
      throw new BadRequestException("No file uploaded");
    }

    // Generate unique filename
    const fileName = this.fileUploadUtil.generateUniqueFileName(
      file.originalname
    );

    // Upload to storage (local/cloud)
    const filePath = await this.fileUploadUtil.uploadFile(file, fileName);

    // Create document record
    const document = this.documentsRepository.create({
      fileName,
      originalName: file.originalname,
      mimeType: file.mimetype,
      fileSize: file.size,
      filePath,
      documentType: uploadDocumentDto.documentType,
      description: uploadDocumentDto.description,
      tags: uploadDocumentDto.tags,
      uploadedBy: user,
      organizationId: user.organizationId,
    });

    return this.documentsRepository.save(document);
  }

  async getOrganizationDocuments(
    organizationId: string,
    options: {
      page: number;
      limit: number;
      documentType?: string;
      status?: string;
    },
    user: User
  ) {
    // Check permissions
    if (
      user.role !== UserRole.ADMIN &&
      user.organizationId !== organizationId
    ) {
      throw new ForbiddenException("Access denied");
    }

    const query = this.documentsRepository
      .createQueryBuilder("document")
      .leftJoinAndSelect("document.uploadedBy", "uploadedBy")
      .leftJoinAndSelect("document.reviewedBy", "reviewedBy")
      .where("document.organizationId = :organizationId", { organizationId });

    // Apply filters
    if (options.documentType) {
      query.andWhere("document.documentType = :documentType", {
        documentType: options.documentType,
      });
    }

    if (options.status) {
      query.andWhere("document.status = :status", { status: options.status });
    }

    // Apply pagination
    const skip = (options.page - 1) * options.limit;
    query.skip(skip).take(options.limit);

    // Order by creation date
    query.orderBy("document.createdAt", "DESC");

    const [documents, total] = await query.getManyAndCount();

    return {
      documents,
      pagination: {
        page: options.page,
        limit: options.limit,
        total,
        pages: Math.ceil(total / options.limit),
      },
    };
  }

  async getDocument(id: string, user: User) {
    const document = await this.documentsRepository.findOne({
      where: { id },
      relations: ["uploadedBy", "reviewedBy", "organization"],
    });

    if (!document) {
      throw new NotFoundException("Document not found");
    }

    // Check permissions
    if (
      user.role !== UserRole.ADMIN &&
      document.organizationId !== user.organizationId
    ) {
      throw new ForbiddenException("Access denied");
    }

    return document;
  }

  async updateDocument(
    id: string,
    updateDocumentDto: UpdateDocumentDto,
    user: User
  ) {
    const document = await this.getDocument(id, user);

    // Only allow updates to certain fields
    const allowedUpdates = ["description", "tags", "documentType"];
    const updates = {};

    allowedUpdates.forEach((field) => {
      if (updateDocumentDto[field] !== undefined) {
        updates[field] = updateDocumentDto[field];
      }
    });

    Object.assign(document, updates);
    return this.documentsRepository.save(document);
  }

  async deleteDocument(id: string, user: User) {
    const document = await this.getDocument(id, user);

    // Delete file from storage
    await this.fileUploadUtil.deleteFile(document.filePath);

    // Delete from database
    await this.documentsRepository.remove(document);

    return { message: "Document deleted successfully" };
  }

  async updateDocumentStatus(
    id: string,
    status: string,
    reviewNotes: string,
    user: User
  ) {
    if (user.role !== UserRole.ADMIN) {
      throw new ForbiddenException("Only admins can update document status");
    }

    const document = await this.documentsRepository.findOne({
      where: { id },
    });

    if (!document) {
      throw new NotFoundException("Document not found");
    }

    if (!Object.values(DocumentStatus).includes(status as DocumentStatus)) {
      throw new BadRequestException("Invalid status");
    }

    document.status = status as DocumentStatus;
    document.reviewedBy = user;
    document.reviewNotes = reviewNotes;

    return this.documentsRepository.save(document);
  }

  async downloadDocument(id: string, user: User) {
    const document = await this.getDocument(id, user);

    // Get file stream
    const fileStream = await this.fileUploadUtil.getFileStream(
      document.filePath
    );

    return {
      stream: fileStream,
      fileName: document.originalName,
      mimeType: document.mimeType,
    };
  }
}
```

## Guards and Decorators

### JWT Auth Guard

```typescript
// src/modules/auth/guards/jwt-auth.guard.ts
import { Injectable, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
```

### Roles Guard

```typescript
// src/modules/auth/guards/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "../decorators/roles.decorator";
import { UserRole } from "../../users/entities/user.entity";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()]
    );

    if (!requiredRoles) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some((role) => user.role === role);
  }
}
```

### Roles Decorator

```typescript
// src/modules/auth/decorators/roles.decorator.ts
import { SetMetadata } from "@nestjs/common";
import { UserRole } from "../../users/entities/user.entity";

export const ROLES_KEY = "roles";
export const Roles = (...roles: UserRole[]) => SetMetadata(ROLES_KEY, roles);
```

### Current User Decorator

```typescript
// src/modules/auth/decorators/current-user.decorator.ts
import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);
```

## Utils

### File Upload Utility

```typescript
// src/utils/file-upload.util.ts
import { Injectable } from "@nestjs/common";
import { createWriteStream, createReadStream, unlink } from "fs";
import { promisify } from "util";
import { v4 as uuidv4 } from "uuid";
import * as path from "path";

@Injectable()
export class FileUploadUtil {
  private uploadDir = "uploads";

  generateUniqueFileName(originalName: string): string {
    const extension = path.extname(originalName);
    const baseName = path.basename(originalName, extension);
    const uniqueId = uuidv4();
    return `${baseName}_${uniqueId}${extension}`;
  }

  async uploadFile(
    file: Express.Multer.File,
    fileName: string
  ): Promise<string> {
    const filePath = path.join(this.uploadDir, fileName);

    return new Promise((resolve, reject) => {
      const writeStream = createWriteStream(filePath);
      writeStream.write(file.buffer);
      writeStream.end();

      writeStream.on("finish", () => resolve(filePath));
      writeStream.on("error", reject);
    });
  }

  async getFileStream(filePath: string) {
    return createReadStream(filePath);
  }

  async deleteFile(filePath: string): Promise<void> {
    const unlinkAsync = promisify(unlink);
    await unlinkAsync(filePath);
  }
}
```

## Main App Module

```typescript
// src/app.module.ts
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MulterModule } from "@nestjs/platform-express";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./modules/auth/auth.module";
import { UsersModule } from "./modules/users/users.module";
import { OrganizationsModule } from "./modules/organizations/organizations.module";
import { DocumentsModule } from "./modules/documents/documents.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: process.env.NODE_ENV !== "production",
    }),
    MulterModule.register({
      dest: "./uploads",
    }),
    AuthModule,
    UsersModule,
    OrganizationsModule,
    DocumentsModule,
  ],
})
export class AppModule {}
```

## Environment Variables (.env)

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=password
DB_NAME=bricklage_db

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# File Upload
MAX_FILE_SIZE=10485760
UPLOAD_DIR=uploads

# App
PORT=3001
NODE_ENV=development
```

## API Endpoints Summary

### Documents Endpoints:

- `POST /documents/upload` - Upload a new document
- `GET /documents/organization/:organizationId` - Get organization documents with pagination and filters
- `GET /documents/:id` - Get specific document details
- `PUT /documents/:id` - Update document metadata
- `DELETE /documents/:id` - Delete a document
- `PUT /documents/:id/status` - Update document status (admin only)
- `GET /documents/:id/download` - Download a document

### Features:

- Role-based access control (Admin, Organization, User)
- File upload with validation (10MB max, specific file types)
- Document status management (Pending, Approved, Rejected)
- Pagination and filtering
- Secure file storage
- Audit trail (uploaded by, reviewed by, timestamps)

This structure provides a complete foundation for handling organization documents in your Bricklage platform with proper authentication, authorization, and file management capabilities.
