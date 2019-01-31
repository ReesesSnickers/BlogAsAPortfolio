'use strict';

/**
 * Volunteers.js controller
 *
 * @description: A set of functions called "actions" for managing `Volunteers`.
 */

module.exports = {

  /**
   * Retrieve volunteers records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.volunteers.search(ctx.query);
    } else {
      return strapi.services.volunteers.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a volunteers record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.volunteers.fetch(ctx.params);
  },

  /**
   * Count volunteers records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.volunteers.count(ctx.query);
  },

  /**
   * Create a/an volunteers record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.volunteers.add(ctx.request.body);
  },

  /**
   * Update a/an volunteers record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.volunteers.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an volunteers record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.volunteers.remove(ctx.params);
  }
};
