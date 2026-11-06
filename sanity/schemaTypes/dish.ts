import {defineType, defineField} from 'sanity';


export const dishType = defineType({
    name: 'dish',
    title: 'Dish',
    type: 'document',

    fields:[
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {source: 'name'},
            validation: (rule) => rule.required(),

        }),

        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',

        }),

        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            validation: (rule) => rule.required().min(0),
        }),

        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {hotspot: true},
        }),

        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{type: 'category'}],
            validation: (rule) => rule.required(),
        }),

        defineField({
            name: 'isFeautured',
            title: 'Featured Dish',
            type: 'boolean',
            initialValue: false,
        }),

        defineField({
            name: 'isAvailable',
            title: 'Available',
            type: 'boolean',
            initialValue: true,
        })



        

    ]
})