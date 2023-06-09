import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { ReviewModel } from './review.modele';

@Controller('review')
export class ReviewController {

    @Post('create')
    async create(@Body() dto: Omit<ReviewModel, '_id'>) {

    }

    @Delete(':id')
    async delete(@Param('id') id: string) {

    }

    @Get('byProduct/:productId')
    async get(@Param('productId') productId: string) {

    }

}
