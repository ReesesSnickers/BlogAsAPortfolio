'use strict';

/**
 * Skills.js controller
 *
 * @description: A set of functions called "actions" for managing `Skills`.
 */

module.exports = {

  /**
   * Retrieve skills records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.skills.search(ctx.query);
    } else {
      return strapi.services.skills.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a skills record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.skills.fetch(ctx.params);
  },

  /**
   * Count skills records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.skills.count(ctx.query);
  },

  /**
   * Create a/an skills record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.skills.add(ctx.request.body);
  },

  /**
   * Update a/an skills record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.skills.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an skills record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.skills.remove(ctx.params);
  }
};
