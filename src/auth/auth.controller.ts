import { Body, Controller, Logger, Post } from '@nestjs/common';
// files
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  private readonly logger = new Logger(AuthService.name, { timestamp: true });

  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    this.logger.verbose(`signUp (${JSON.stringify(authCredentialsDto)})`);

    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    this.logger.verbose(`signIn (${JSON.stringify(authCredentialsDto)})`);

    return this.authService.signIn(authCredentialsDto);
  }
}
