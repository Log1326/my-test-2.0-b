import { IsBoolean, IsEmail, IsString } from 'class-validator'

export class UserDto {
	@IsEmail()
	email: string
	password?: string
	@IsString()
	name: string
	@IsString()
	description: string
	@IsString()
	avatarPath: string
	@IsBoolean()
	isVerified: boolean
}
