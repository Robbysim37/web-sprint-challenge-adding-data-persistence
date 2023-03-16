/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
    .createTable(`project`, table => {
        table.increments(`project_id`)
        table.string(`product_name`).notNullable()
        table.string(`project_description`)
        table.integer(`product_completed`).notNullable().defaultTo(0)
    })
    .createTable(`resource`, table => {
        table.increments(`resource_id`)
        table.string(`resource_name`).notNullable().unique()
        table.string(`resource_description`)
    })
    .createTable(`task`, table => {
        table.increments(`task_id`)
        table.string(`task_description`).notNullable()
        table.string(`task_notes`)
        table.integer(`task_completed`).notNullable().defaultTo(0)
        table.integer(`project_id`)
        .notNullable()
        .references(`project_id`)
        .inTable(`project`)
        .onDelete(`RESTRICT`)
        .onUpdate(`RESTRICT`)
    })
    // .createTable(`project_resources`, table => {
    //     table.increments(`resource_assignment_id`)
    //     table.integer(`project_id`)
    //     .notNullable()
    //     .references(`project_id`)
    //     .inTable(`project`)
    //     .onDelete(`RESTRICT`)
    //     .onUpdate(`RESTRICT`)
    //     table.integer(`resource_id`)
    //     .notNullable()
    //     .references(`resource_id`)
    //     .inTable(`resource`)
    //     .onDelete(`RESTRICT`)
    //     .onUpdate(`RESTRICT`)
    // })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists(`resource_assignment`)
    .dropTableIfExists(`task`)
    .dropTableIfExists(`resource`)
    .dropTableIfExists(`project`)
};
