'use strict';

/**
 * Publications.js controller
 *
 * @description: A set of functions called "actions" for managing `Publications`.
 */

module.exports = {

  /**
   * Retrieve publications records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.publications.search(ctx.query);
    } else {
      return strapi.services.publications.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a publications record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.publications.fetch(ctx.params);
  },

  /**
   * Count publications records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.publications.count(ctx.query);
  },

  /**
   * Create a/an publications record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.publications.add(ctx.request.body);
  },

  /**
   * Update a/an publications record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.publications.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an publications record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.publications.remove(ctx.params);
  }
};
