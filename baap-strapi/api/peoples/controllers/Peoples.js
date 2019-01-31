'use strict';

/**
 * Peoples.js controller
 *
 * @description: A set of functions called "actions" for managing `Peoples`.
 */

module.exports = {

  /**
   * Retrieve peoples records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.peoples.search(ctx.query);
    } else {
      return strapi.services.peoples.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a peoples record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.peoples.fetch(ctx.params);
  },

  /**
   * Count peoples records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.peoples.count(ctx.query);
  },

  /**
   * Create a/an peoples record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.peoples.add(ctx.request.body);
  },

  /**
   * Update a/an peoples record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.peoples.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an peoples record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.peoples.remove(ctx.params);
  }
};
