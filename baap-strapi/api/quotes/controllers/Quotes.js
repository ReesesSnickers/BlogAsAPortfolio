'use strict';

/**
 * Quotes.js controller
 *
 * @description: A set of functions called "actions" for managing `Quotes`.
 */

module.exports = {

  /**
   * Retrieve quotes records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.quotes.search(ctx.query);
    } else {
      return strapi.services.quotes.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a quotes record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.quotes.fetch(ctx.params);
  },

  /**
   * Count quotes records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.quotes.count(ctx.query);
  },

  /**
   * Create a/an quotes record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.quotes.add(ctx.request.body);
  },

  /**
   * Update a/an quotes record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.quotes.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an quotes record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.quotes.remove(ctx.params);
  }
};
