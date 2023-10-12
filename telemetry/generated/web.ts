/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// AUTOGENERATED BY glean_parser v8.1.1. DO NOT EDIT. DO NOT COMMIT.

import EventMetricType from "@mozilla/glean/private/metrics/event";
import StringMetricType from "@mozilla/glean/private/metrics/string";

/**
 * Event triggered when a user clicks a link on a web page.
 *
 * Generated from `web.link_click`.
 */
export const linkClick = new EventMetricType<{
    element_id?: string,
    target_url?: string,
}>({
    category: "web",
    name: "link_click",
    sendInPings: ["events"],
    lifetime: "ping",
    disabled: false,
}, ["element_id", "target_url"]);

/**
 * The full URL of the page that was visited, along with URL query parameters. For
 * example, `https://mozilla.social/home?utm_source=test`.
 *
 * Generated from `web.page_url`.
 */
export const pageUrl = new StringMetricType({
    category: "web",
    name: "page_url",
    sendInPings: ["events"],
    lifetime: "application",
    disabled: false,
});

/**
 * Event triggered when a user requests to load a web page.
 *
 * Generated from `web.page_view`.
 */
export const pageView = new EventMetricType({
    category: "web",
    name: "page_view",
    sendInPings: ["events"],
    lifetime: "ping",
    disabled: false,
}, []);

/**
 * The full URL of the previous web page from which a link was followed in order
 * to trigger the page view. Comes from the `referer` field of the HTTP header.
 * May not always be available. For example, `https://www.google.com`.
 *
 * Generated from `web.referrer_url`.
 */
export const referrerUrl = new StringMetricType({
    category: "web",
    name: "referrer_url",
    sendInPings: ["events"],
    lifetime: "application",
    disabled: false,
});

