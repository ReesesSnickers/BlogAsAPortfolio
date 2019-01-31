'use strict';

/**
 * Logos.js controller
 *
 * @description: A set of functions called "actions" for managing `Logos`.
 */

module.exports = {

  /**
   * Retrieve logos records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.logos.search(ctx.query);
    } else {
      return strapi.services.logos.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a logos record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.logos.fetch(ctx.params);
  },

  /**
   * Count logos records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.logos.count(ctx.query);
  },

  /**
   * Create a/an logos record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.logos.add(ctx.request.body);
  },

  /**
   * Update a/an logos record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.logos.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an logos record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.logos.remove(ctx.params);
  }
};
