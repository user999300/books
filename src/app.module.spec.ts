import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';

describe('App Module', () => {
    it('should compile the module', async () => {
        const module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        expect(module).toBeDefined();
    });
});
