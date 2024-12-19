// Copyright (c) 2023, AiBizzHub, LLC and contributors
// For license information, please see license.txt

frappe.ui.form.on("CRM Deal", {
	refresh(frm) {
		frm.add_web_link(`/crm/deals/${frm.doc.name}`, __("Open in Portal"));
	},
});
