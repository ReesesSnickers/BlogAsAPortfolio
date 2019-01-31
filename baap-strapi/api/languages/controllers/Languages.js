'use strict';

/**
 * Languages.js controller
 *
 * @description: A set of functions called "actions" for managing `Languages`.
 */

module.exports = {

  /**
   * Retrieve languages records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.languages.search(ctx.query);
    } else {
      return strapi.services.languages.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a languages record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.languages.fetch(ctx.params);
  },

  /**
   * Count languages records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.languages.count(ctx.query);
  },

  /**
   * Create a/an languages record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.languages.add(ctx.request.body);
  },

  /**
   * Update a/an languages record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.languages.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an languages record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.languages.remove(ctx.params);
  }
};
