'use strict';

/**
 * Educations.js controller
 *
 * @description: A set of functions called "actions" for managing `Educations`.
 */

module.exports = {

  /**
   * Retrieve educations records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.educations.search(ctx.query);
    } else {
      return strapi.services.educations.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a educations record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.educations.fetch(ctx.params);
  },

  /**
   * Count educations records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.educations.count(ctx.query);
  },

  /**
   * Create a/an educations record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.educations.add(ctx.request.body);
  },

  /**
   * Update a/an educations record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.educations.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an educations record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.educations.remove(ctx.params);
  }
};
