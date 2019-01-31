'use strict';

/**
 * Intrests.js controller
 *
 * @description: A set of functions called "actions" for managing `Intrests`.
 */

module.exports = {

  /**
   * Retrieve intrests records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.intrests.search(ctx.query);
    } else {
      return strapi.services.intrests.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a intrests record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.intrests.fetch(ctx.params);
  },

  /**
   * Count intrests records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.intrests.count(ctx.query);
  },

  /**
   * Create a/an intrests record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.intrests.add(ctx.request.body);
  },

  /**
   * Update a/an intrests record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.intrests.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an intrests record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.intrests.remove(ctx.params);
  }
};
