'use strict';

/**
 * Certificates.js controller
 *
 * @description: A set of functions called "actions" for managing `Certificates`.
 */

module.exports = {

  /**
   * Retrieve certificates records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.certificates.search(ctx.query);
    } else {
      return strapi.services.certificates.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a certificates record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.certificates.fetch(ctx.params);
  },

  /**
   * Count certificates records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.certificates.count(ctx.query);
  },

  /**
   * Create a/an certificates record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.certificates.add(ctx.request.body);
  },

  /**
   * Update a/an certificates record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.certificates.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an certificates record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.certificates.remove(ctx.params);
  }
};
