// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Conference documents */
interface ConferenceDocumentData {
    /**
     * Name field in *Conference*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: conference.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Image field in *Conference*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: conference.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<"main">;
    /**
     * Description field in *Conference*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: conference.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Date defined field in *Conference*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: conference.date_defined
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    date_defined: prismicT.BooleanField;
    /**
     * Date field in *Conference*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: conference.date
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date: prismicT.DateField;
    /**
     * Subscribe field in *Conference*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: conference.subscribe
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    subscribe: prismicT.LinkField;
    /**
     * Theme field in *Conference*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **Default Value**: Red
     * - **API ID Path**: conference.theme
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    theme: prismicT.SelectField<"Red" | "Pink" | "Blue" | "Green" | "Yellow" | "White", "filled">;
    /**
     * Available field in *Conference*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: conference.available
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    available: prismicT.BooleanField;
    /**
     * Slice Zone field in *Conference*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: conference.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<ConferenceDocumentDataSlicesSlice>;
}
/**
 * Slice for *Conference → Slice Zone*
 *
 */
type ConferenceDocumentDataSlicesSlice = never;
/**
 * Conference document from Prismic
 *
 * - **API ID**: `conference`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ConferenceDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ConferenceDocumentData>, "conference", Lang>;
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * Meta Description field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.meta_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_description: prismicT.KeyTextField;
    /**
     * Meta Keywords field in *Home*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.meta_keywords
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    meta_keywords: prismicT.KeyTextField;
    /**
     * Title field in *Home*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: home.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content field in *Home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Logo field in *Home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Home*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: home.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomeDocumentDataSlicesSlice>;
    /**
     * Navigation field in *Home*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: false
     * - **API ID Path**: home.navigation
     * - **Tab**: Customization
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    navigation: prismicT.BooleanField;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice = CallToActionSlice | RelationshipSlice;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Navigation documents */
interface NavigationDocumentData {
    /**
     * Links field in *Navigation*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation.links[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    links: prismicT.GroupField<Simplify<NavigationDocumentDataLinksItem>>;
}
/**
 * Item in Navigation → Links
 *
 */
export interface NavigationDocumentDataLinksItem {
    /**
     * Label field in *Navigation → Links*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Optional - Label for the link
     * - **API ID Path**: navigation.links[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    label: prismicT.TitleField;
    /**
     * Link field in *Navigation → Links*
     *
     * - **Field Type**: Link
     * - **Placeholder**: Link for navigation item
     * - **API ID Path**: navigation.links[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<NavigationDocumentData>, "navigation", Lang>;
/** Content for Page documents */
interface PageDocumentData {
    /**
     * Title field in *Page*
     *
     * - **Field Type**: Title
     * - **Placeholder**: Title for the page
     * - **API ID Path**: page.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content field in *Page*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: page.content
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Slice Zone field in *Page*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: page.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<PageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = FaqSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for Settings documents */
interface SettingsDocumentData {
    /**
     * Title field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.title
     * - **Tab**: Data
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
    /**
     * Description field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.description
     * - **Tab**: Data
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    description: prismicT.KeyTextField;
    /**
     * Corporate name field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.corporate_name
     * - **Tab**: Data
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    corporate_name: prismicT.KeyTextField;
    /**
     * CNPJ field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.cnpj
     * - **Tab**: Data
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cnpj: prismicT.KeyTextField;
    /**
     * E-mail field in *Settings*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.email
     * - **Tab**: Data
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    email: prismicT.KeyTextField;
    /**
     * Logo Full field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.logo_full
     * - **Tab**: Customization
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo_full: prismicT.ImageField<never>;
    /**
     * Logo Short field in *Settings*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.logo_short
     * - **Tab**: Customization
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo_short: prismicT.ImageField<never>;
    /**
     * Slice Zone field in *Settings*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: settings.slices[]
     * - **Tab**: Social
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<SettingsDocumentDataSlicesSlice>;
}
/**
 * Slice for *Settings → Slice Zone*
 *
 */
type SettingsDocumentDataSlicesSlice = SocialSlice;
/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<SettingsDocumentData>, "settings", Lang>;
/** Content for Sponsor documents */
interface SponsorDocumentData {
    /**
     * Name field in *Sponsor*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.name
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.TitleField;
    /**
     * Url field in *Sponsor*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.url
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    url: prismicT.LinkField;
    /**
     * Description field in *Sponsor*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Logo field in *Sponsor*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.logo
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<"highlight" | "small">;
    /**
     * Start field in *Sponsor*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.date_start
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date_start: prismicT.DateField;
    /**
     * End field in *Sponsor*
     *
     * - **Field Type**: Date
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.date_end
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/date
     *
     */
    date_end: prismicT.DateField;
    /**
     * Type field in *Sponsor*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.sponsorship_type
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    sponsorship_type: prismicT.SelectField<"Platinum" | "Gold" | "Silver" | "Bronze">;
    /**
     * Highlight field in *Sponsor*
     *
     * - **Field Type**: Embed
     * - **Placeholder**: *None*
     * - **API ID Path**: sponsor.highlight_video
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/embed
     *
     */
    highlight_video: prismicT.EmbedField;
}
/**
 * Sponsor document from Prismic
 *
 * - **API ID**: `sponsor`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SponsorDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<SponsorDocumentData>, "sponsor", Lang>;
export type AllDocumentTypes = ConferenceDocument | HomeDocument | NavigationDocument | PageDocument | SettingsDocument | SponsorDocument;
/**
 * Primary content in CallToAction → Primary
 *
 */
interface CallToActionSliceDefaultPrimary {
    /**
     * Title field in *CallToAction → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: call_to_action.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content field in *CallToAction → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Item in CallToAction → Items
 *
 */
export interface CallToActionSliceDefaultItem {
    /**
     * Title field in *CallToAction → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content field in *CallToAction → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action.items[].content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Link Label field in *CallToAction → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action.items[].link_label
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    link_label: prismicT.RichTextField;
    /**
     * Link field in *CallToAction → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: call_to_action.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Default variation for CallToAction Slice
 *
 * - **API ID**: `default`
 * - **Description**: `CallToAction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CallToActionSliceDefaultPrimary>, Simplify<CallToActionSliceDefaultItem>>;
/**
 * Slice variation for *CallToAction*
 *
 */
type CallToActionSliceVariation = CallToActionSliceDefault;
/**
 * CallToAction Shared Slice
 *
 * - **API ID**: `call_to_action`
 * - **Description**: `CallToAction`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CallToActionSlice = prismicT.SharedSlice<"call_to_action", CallToActionSliceVariation>;
/**
 * Primary content in Faq → Primary
 *
 */
interface FaqSliceDefaultPrimary {
    /**
     * Title field in *Faq → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: faq.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content field in *Faq → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: faq.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Item in Faq → Items
 *
 */
export interface FaqSliceDefaultItem {
    /**
     * Title field in *Faq → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: faq.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content field in *Faq → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: faq.items[].content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
}
/**
 * Default variation for Faq Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Faq`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FaqSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<FaqSliceDefaultPrimary>, Simplify<FaqSliceDefaultItem>>;
/**
 * Slice variation for *Faq*
 *
 */
type FaqSliceVariation = FaqSliceDefault;
/**
 * Faq Shared Slice
 *
 * - **API ID**: `faq`
 * - **Description**: `Faq`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FaqSlice = prismicT.SharedSlice<"faq", FaqSliceVariation>;
/**
 * Primary content in Relationship → Primary
 *
 */
interface RelationshipSliceDefaultPrimary {
    /**
     * Title field in *Relationship → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: relationship.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Content field in *Relationship → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: relationship.primary.content
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    content: prismicT.RichTextField;
    /**
     * Type field in *Relationship → Primary*
     *
     * - **Field Type**: Select
     * - **Placeholder**: *None*
     * - **API ID Path**: relationship.primary.type
     * - **Documentation**: https://prismic.io/docs/core-concepts/select
     *
     */
    type: prismicT.SelectField<"Conferences" | "Sponsors">;
}
/**
 * Default variation for Relationship Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Sections`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RelationshipSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<RelationshipSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Relationship*
 *
 */
type RelationshipSliceVariation = RelationshipSliceDefault;
/**
 * Relationship Shared Slice
 *
 * - **API ID**: `relationship`
 * - **Description**: `Sections`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type RelationshipSlice = prismicT.SharedSlice<"relationship", RelationshipSliceVariation>;
/**
 * Item in Social → Items
 *
 */
export interface SocialSliceDefaultItem {
    /**
     * Name field in *Social → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: social.items[].name
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    name: prismicT.KeyTextField;
    /**
     * Description field in *Social → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: social.items[].sr_description
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    sr_description: prismicT.KeyTextField;
    /**
     * Icon Light field in *Social → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: social.items[].icon_light
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    icon_light: prismicT.ImageField<never>;
    /**
     * Logo Dark field in *Social → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: social.items[].logo_dark
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo_dark: prismicT.ImageField<"small">;
    /**
     * Link field in *Social → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: social.items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
    /**
     * Visibility field in *Social → Items*
     *
     * - **Field Type**: Boolean
     * - **Placeholder**: *None*
     * - **Default Value**: true
     * - **API ID Path**: social.items[].active
     * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
     *
     */
    active: prismicT.BooleanField;
}
/**
 * Default variation for Social Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Social`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SocialSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<SocialSliceDefaultItem>>;
/**
 * Slice variation for *Social*
 *
 */
type SocialSliceVariation = SocialSliceDefault;
/**
 * Social Shared Slice
 *
 * - **API ID**: `social`
 * - **Description**: `Social`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SocialSlice = prismicT.SharedSlice<"social", SocialSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ConferenceDocumentData, ConferenceDocumentDataSlicesSlice, ConferenceDocument, HomeDocumentData, HomeDocumentDataSlicesSlice, HomeDocument, NavigationDocumentData, NavigationDocumentDataLinksItem, NavigationDocument, PageDocumentData, PageDocumentDataSlicesSlice, PageDocument, SettingsDocumentData, SettingsDocumentDataSlicesSlice, SettingsDocument, SponsorDocumentData, SponsorDocument, AllDocumentTypes, CallToActionSliceDefaultPrimary, CallToActionSliceDefaultItem, CallToActionSliceDefault, CallToActionSliceVariation, CallToActionSlice, FaqSliceDefaultPrimary, FaqSliceDefaultItem, FaqSliceDefault, FaqSliceVariation, FaqSlice, RelationshipSliceDefaultPrimary, RelationshipSliceDefault, RelationshipSliceVariation, RelationshipSlice, SocialSliceDefaultItem, SocialSliceDefault, SocialSliceVariation, SocialSlice };
    }
}
