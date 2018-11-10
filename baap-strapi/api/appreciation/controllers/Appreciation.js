'use strict';

/**
 * Appreciation.js controller
 *
 * @description: A set of functions called "actions" for managing `Appreciation`.
 */

module.exports = {

  /**
   * Retrieve appreciation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.appreciation.search(ctx.query);
    } else {
      return strapi.services.appreciation.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a appreciation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.appreciation.fetch(ctx.params);
  },

  /**
   * Count appreciation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.appreciation.count(ctx.query);
  },

  /**
   * Create a/an appreciation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.appreciation.add(ctx.request.body);
  },

  /**
   * Update a/an appreciation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.appreciation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an appreciation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.appreciation.remove(ctx.params);
  }
};
