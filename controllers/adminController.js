const Category = require("../models/Category");

module.exports = {
  // route view
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard", {
      title: "Travolla | Dashboard",
    });
  },

  viewCategory: async (req, res) => {
    try {
      const category = await Category.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };

      res.render("admin/category/view_category", {
        category,
        alert,
        title: "Travolla | Category",
      });
    } catch (error) {
      res.render("admin/category/");
    }
  },

  viewBank: (req, res) => {
    res.render("admin/bank/view_bank", {
      title: "Travolla | Bank",
    });
  },

  viewItem: (req, res) => {
    res.render("admin/item/view_item", {
      title: "Travolla | Item",
    });
  },

  viewBooking: (req, res) => {
    res.render("admin/booking/view_booking", {
      title: "Travolla | Booking",
    });
  },

  // add / post data

  addCategory: async (req, res) => {
    try {
      const { name } = req.body;

      await Category.create({ name });

      req.flash("alertMessage", "Successfully added category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `error ${error.message}`);
      req.flash("alertStatus", "danger");

      res.redirect("/admin/category");
    }
  },

  // edit data

  editCategory: async (req, res) => {
    try {
      const { id, name } = req.body;

      const category = await Category.findOne({ _id: id });
      category.name = name;
      await category.save();

      req.flash("alertMessage", "Successfully update category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", "failed update category");
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },

  //delete data

  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;

      const category = await Category.findOne({ _id: id });
      await category.deleteOne();

      req.flash("alertMessage", "Successfully delete category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", "failed delete category");
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },
};
