import * as prismic from "@prismicio/client";

// Create a client
export const Client = prismic.createClient("euTech");


export const PRISMIC_heading = (item, index) => {
    return item?.heading[index = 0]?.text || " "
}
export const PRISMIC_title = (item, index) => {
    return item?.title[index = 0]?.text || " "
}
export const PRISMIC_footer_section_title = (item, index) => {
    return item?.footer_section_title[index = 0]?.text || " "
}
export const PRISMIC_heading2 = (item, index) => {
    return item?.heading2[index = 0]?.text || " "
}
export const PRISMIC_name = (item, index) => {
    return item?.name[index = 0]?.text || " "
}
export const PRISMIC_text = (item, index) => {
    return item?.text[index = 0]?.text || " "
}
export const PRISMIC_text2 = (item, index) => {
    return item?.text[index = 1]?.text || " "
}
export const PRISMIC_message = (item, index) => {
    return item?.message[index = 0]?.text || " "
}
export const PRISMIC_link_text = (item, index) => {
    return item?.link_text || " "
}
export const PRISMIC_button_text = (item, index) => {
    return item?.button_text || " "
}
export const PRISMIC_second_text = (item, index) => {
    return item?.second_text[0]?.text || " "
}
export const PRISMIC_category = (item, index) => {
    return item?.category || " "
}
export const PRISMIC_button_link = (item, index) => {
    return item?.button_link || " "
}
export const PRISMIC_role = (item, index) => {
    return item?.role || " "
}
export const PRISMIC_internal_link = (item, index) => {
    return item?.internal_link || " "
}
export const PRISMIC_link = (item, index) => {
    return item?.link?.url || " "
}
export const PRISMIC_image = (item, image) => {
    return item?.image?.url || image || "#ffffff "
}
export const PRISMIC_image2 = (item, image) => {
    return item?.image2?.url || image || "#ffffff "
}
export const PRISMIC_image3 = (item, image) => {
    return item?.image3?.url || image || "#ffffff "
}
export const PRISMIC_background = (item, image) => {
    return item?.image?.url
}
export const PRISMIC_logo = (item, image) => {
    return item?.logo?.url || image || ""
}
export const PRISMIC_icon = (item) => {
    return item?.icon?.url || " "
}