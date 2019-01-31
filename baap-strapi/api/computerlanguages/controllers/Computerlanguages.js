'use strict';

/**
 * Computerlanguages.js controller
 *
 * @description: A set of functions called "actions" for managing `Computerlanguages`.
 */

module.exports = {

  /**
   * Retrieve computerlanguages records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.computerlanguages.search(ctx.query);
    } else {
      return strapi.services.computerlanguages.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a computerlanguages record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.computerlanguages.fetch(ctx.params);
  },

  /**
   * Count computerlanguages records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.computerlanguages.count(ctx.query);
  },

  /**
   * Create a/an computerlanguages record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.computerlanguages.add(ctx.request.body);
  },

  /**
   * Update a/an computerlanguages record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.computerlanguages.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an computerlanguages record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.computerlanguages.remove(ctx.params);
  }
};
