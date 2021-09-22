export default {
	"data": {
		"dora": {
			"__typename": "DoraQuery",
			"exploreV3": {
				"__typename": "DoraExploreV3Response",
				"exploreMap": {
					"__typename": "DoraExploreV3Map",
					"autoSearchEnabled": false,
					"additionalListings": null,
					"isMapEnabled": true,
					"isMapToggled": true,
					"isMonthlyStaysSearch": false,
					"mapMode": "DEFAULT",
					"secondaryRecommendations": [],
					"mapBoundsHint": null
				},
				"educationOverlay": null,
				"layout": {
					"__typename": "DoraExploreLayout",
					"desktopLayout": "DOUBLE_FIXED_WIDTH_WIDE_LISTING",
					"desktopMapToggle": {
						"__typename": "DoraMapToggle",
						"isMapVisible": true,
						"isToggleVisible": true,
						"isMapHeaderVisible": null
					},
					"mobileMapToggle": {
						"__typename": "DoraMapToggle",
						"isMapVisible": false,
						"isToggleVisible": true,
						"isMapHeaderVisible": null
					},
					"fetchMoreMode": "PAGINATION",
					"filterBarMode": "DEFAULT"
				},
				"searchHeader": {
					"__typename": "DoraSearchHeaderV3",
					"alert": null,
					"desktopSearchInputMode": "FIXED",
					"desktopSearchInputPlaceholderText": "Start your search",
					"heroSections": [],
					"marqueeMode": "DEFAULT",
					"mobileSearchInputMode": "FIXED",
					"searchBlocks": [{
						"__typename": "DoraSearchBlockV3",
						"autocompleteVertical": "homes",
						"badge": null,
						"directUrl": null,
						"id": "STAYS",
						"imageUrl": "https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg?aki_policy=small",
						"refinementPath": "/homes",
						"searchParams": null,
						"searchInputUnion": {
							"__typename": "DoraDefaultSearchInput",
							"placeholderText": "Search stays",
							"searchInputComponents": [{
								"__typename": "DoraSearchInputComponent",
								"airmoji": "nav_search",
								"desktopInputMode": "QUERY",
								"desktopPlaceholderText": ["Where are you going?"],
								"desktopTitle": ["Location"],
								"filterSectionId": "query",
								"id": "location",
								"littleSearchPlaceholderText": "Location Florianópolis - SC",
								"littleSearchTextValue": "Florianópolis - SC",
								"placeholderText": "Where are you going?",
								"requiredInput": true,
								"secondaryTextValue": null,
								"textValue": "Florianópolis - SC",
								"title": "Location"
							}, {
								"__typename": "DoraSearchInputComponent",
								"airmoji": "core_calendar",
								"desktopInputMode": "DATE_RANGE_SPLIT",
								"desktopPlaceholderText": ["Add dates", "Add dates"],
								"desktopTitle": ["Check in", "Check out"],
								"filterSectionId": "stays_date_picker",
								"id": "dates",
								"littleSearchPlaceholderText": "Dates Jan 10 – 13, 2022",
								"littleSearchTextValue": "Jan 10 – 13, 2022",
								"placeholderText": "Add dates",
								"requiredInput": null,
								"secondaryTextValue": null,
								"textValue": "Jan 10 – 13, 2022",
								"title": "Check in / Check out"
							}, {
								"__typename": "DoraSearchInputComponent",
								"airmoji": "pdp_guests",
								"desktopInputMode": "GUESTS",
								"desktopPlaceholderText": ["Add guests"],
								"desktopTitle": ["Guests"],
								"filterSectionId": "guest_picker",
								"id": "guests",
								"littleSearchPlaceholderText": "Guests 2 guests",
								"littleSearchTextValue": "2 guests",
								"placeholderText": "Add guests",
								"requiredInput": null,
								"secondaryTextValue": null,
								"textValue": "2 guests",
								"title": "Guests"
							}],
							"searchInputFlowOrders": {
								"guests": ["guests"],
								"location": ["location"],
								"dates": ["dates"]
							},
							"textValue": "Florianópolis - SC · Jan 10 – 13, 2022 · 2 guests"
						},
						"selected": true,
						"subtitle": "Homes, hotels, and more",
						"tabSelector": {
							"__typename": "DoraSearchBlockTabSelector",
							"desktopTabLabel": "Places to stay"
						},
						"title": "Edit your search"
					}, {
						"__typename": "DoraSearchBlockV3",
						"autocompleteVertical": "experiences",
						"badge": null,
						"directUrl": null,
						"id": "EXPERIENCES",
						"imageUrl": "https://a0.muscache.com/im/pictures/a77ee672-e790-4362-8cc5-52bec1371ece.jpg?aki_policy=small",
						"refinementPath": "/experiences",
						"searchParams": null,
						"searchInputUnion": {
							"__typename": "DoraDefaultSearchInput",
							"placeholderText": "Search experiences",
							"searchInputComponents": [{
								"__typename": "DoraSearchInputComponent",
								"airmoji": "nav_search",
								"desktopInputMode": "QUERY",
								"desktopPlaceholderText": ["Where are you going?"],
								"desktopTitle": ["Location"],
								"filterSectionId": "query",
								"id": "location",
								"littleSearchPlaceholderText": "Location Florianópolis - SC",
								"littleSearchTextValue": "Florianópolis - SC",
								"placeholderText": "Where are you going?",
								"requiredInput": true,
								"secondaryTextValue": null,
								"textValue": "Florianópolis - SC",
								"title": "Location"
							}, {
								"__typename": "DoraSearchInputComponent",
								"airmoji": "core_calendar",
								"desktopInputMode": "DATE_RANGE_COMBINED",
								"desktopPlaceholderText": ["Add when you want to go"],
								"desktopTitle": ["Date"],
								"filterSectionId": "date_picker",
								"id": "dates",
								"littleSearchPlaceholderText": "Date Jan 10 – 13, 2022",
								"littleSearchTextValue": "Jan 10 – 13, 2022",
								"placeholderText": "Add when you want to go",
								"requiredInput": null,
								"secondaryTextValue": null,
								"textValue": "Jan 10 – 13, 2022",
								"title": "Date"
							}],
							"searchInputFlowOrders": {
								"location": ["location"],
								"dates": ["experience-dates", "location"]
							},
							"textValue": "Florianópolis - SC · Jan 10 – 13, 2022"
						},
						"selected": false,
						"subtitle": "Experiences hosted by locals",
						"tabSelector": {
							"__typename": "DoraSearchBlockTabSelector",
							"desktopTabLabel": "Experiences"
						},
						"title": "Edit your search"
					}],
					"searchInputFlow": {
						"__typename": "DoraSearchInputFlow",
						"background": {
							"__typename": "DoraBackgroundDisplayOptions",
							"css": null,
							"gradientColor": null,
							"largePicture": null,
							"mediumPicture": null,
							"picture": null
						},
						"metadata": {
							"__typename": "DoraSearchInputFlowMetadata",
							"locationSearch": {
								"__typename": "DoraSearchInputFlowLocationSearchMetadata",
								"defaultText": "Where are you going?",
								"stepId": null
							},
							"ltsDates": {
								"__typename": "DoraSearchInputFlowLongTermStayDatesMetadata",
								"messageText": "Planning a shorter stay? Switch to Places to stay",
								"minimumNights": 28
							},
							"verticalPicker": {
								"__typename": "DoraSearchInputFlowVerticalPickerMetadata",
								"promptText": null,
								"verticalCards": [{
									"__typename": "DoraVerticalCard",
									"imageUrl": "https://a0.muscache.com/4ea/air/v2/pictures/02a9e2fa-1d42-409a-b040-99e8eeeb0448.jpg",
									"searchBlockId": "STAYS",
									"subtitle": "Entire homes, rooms & more",
									"title": "Find a place to stay"
								}, {
									"__typename": "DoraVerticalCard",
									"imageUrl": "https://a0.muscache.com/4ea/air/v2/pictures/60a784f9-eb56-4b6d-8d71-50629cae0303.jpg",
									"searchBlockId": "LONG_TERM_STAYS",
									"subtitle": "Stays for 4+ weeks",
									"title": "Find a monthly stay"
								}, {
									"__typename": "DoraVerticalCard",
									"imageUrl": "https://a0.muscache.com/4ea/air/v2/pictures/d0652aac-13ac-4378-a97e-b10d2289d97e.jpg",
									"searchBlockId": "EXPERIENCES",
									"subtitle": "Activities hosted by locals",
									"title": "Find an experience"
								}]
							}
						},
						"steps": [{
							"__typename": "DoraSearchInputFlowStep",
							"canSkip": false,
							"promptText": null,
							"stepId": "location"
						}, {
							"__typename": "DoraSearchInputFlowStep",
							"canSkip": false,
							"promptText": "What are you looking for?",
							"stepId": "vertical"
						}, {
							"__typename": "DoraSearchInputFlowStep",
							"canSkip": true,
							"promptText": "When will you be there?",
							"stepId": "dates"
						}, {
							"__typename": "DoraSearchInputFlowStep",
							"canSkip": true,
							"promptText": "When will you be there?",
							"stepId": "lts-dates"
						}, {
							"__typename": "DoraSearchInputFlowStep",
							"canSkip": true,
							"promptText": "When will you be there?",
							"stepId": "experience-dates"
						}, {
							"__typename": "DoraSearchInputFlowStep",
							"canSkip": true,
							"promptText": "Who's coming?",
							"stepId": "guests"
						}]
					}
				},
				"searchFooter": {
					"__typename": "DoraSearchFooterV3",
					"sections": [{
						"__typename": "DoraExploreV3ListingsSection",
						"loggingContext": {
							"__typename": "DoraExploreV3SectionLoggingContext",
							"backendSearchId": "c65b419b-a6f2-4a37-a11c-e753738b6b37",
							"bankaiSectionId": "289",
							"searchSessionId": "2d08a7b6-9ada-4899-9df9-1ab49f6fbb7f",
							"sectionId": "2d08a7b6-9ada-4899-9df9-1ab49f6fbb7f",
							"sectionIndex": "3",
							"sectionLoggingId": null,
							"sectionTypeUid": "HOME_GROUPING_FLEXIBLE_DATES"
						},
						"resultTypeDeprecated": "listings",
						"sectionComponentType": "listings_Carousel_Explore",
						"sectionComponentTypeV2": "LISTINGS_CAROUSEL",
						"sectionMetadata": {
							"__typename": "DoraSectionMetadata",
							"campaignName": null,
							"cardLayout": "BINGO_DEFAULT",
							"carouselItemSize": null,
							"defaultActiveGroupId": null,
							"destinationPlaceId": null,
							"isMimickingPaginated": false,
							"marqueeDuration": null,
							"pollingInfo": null,
							"reflectImageForRtl": false,
							"seeAllButtonOutlineColor": "#000000",
							"seeAllButtonTextColor": "#000000",
							"seeAllLinkTextColor": "#000000",
							"shouldHideItemsFromMap": true
						},
						"experimentsMetadata": [{
							"__typename": "DoraBankaiExperiment",
							"experiment": "gx_search_lazy_card_row_slider_v3",
							"treatment": "treatment"
						}],
						"title": "Are your dates flexible?",
						"subtitle": "These stays are available within +/- 1 day of your current dates",
						"seeAllInfo": {
							"__typename": "DoraSeeAllInfo",
							"canonicalUrl": null,
							"ctaPositions": null,
							"ctaUrl": null,
							"linkBehavior": null,
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "click_referer",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "t:SEE_ALL|sid:2d08a7b6-9ada-4899-9df9-1ab49f6fbb7f|st:HOME_GROUPING_FLEXIBLE_DATES"
									},
									"valueType": "string"
								}, {
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "search_mode",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "regular_search"
									},
									"valueType": "string"
								}, {
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "flexible_date_search_filter_type",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "0"
									},
									"valueType": "integer"
								}, {
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "title_type",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "NONE"
									},
									"valueType": "string"
								}],
								"placeId": "ChIJ1zLGsk45J5URRscEagtVvIE",
								"query": "Florianópolis - SC",
								"refinementPaths": ["/homes"],
								"resetFilters": false,
								"resetKeys": ["additional_refinements"],
								"tabId": "home_tab"
							},
							"searchSessionId": "2d08a7b6-9ada-4899-9df9-1ab49f6fbb7f",
							"size": "FULL_WIDTH",
							"title": "Show all",
							"totalCount": "4644"
						},
						"sectionActions": [],
						"backgroundDisplayOptions": {
							"__typename": "DoraBackgroundDisplayOptions",
							"backgroundColor": null
						},
						"displayType": "carousel",
						"isPaginated": false,
						"items": [{
							"__typename": "DoraListingItem",
							"listing": {
								"__typename": "DoraListing",
								"avgRating": 4.77,
								"contextualPictures": [{
									"__typename": "DoraPicture",
									"caption": null,
									"id": "836501805",
									"picture": "https://a0.muscache.com/im/pictures/13b34720-45d6-4334-a76a-e4c5db8277b8.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["2 beds", "1 bedroom"]
									},
									"id": "836506792",
									"picture": "https://a0.muscache.com/im/pictures/e8bb3fee-d28c-4726-9194-3e9093069a01.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 bath"]
									},
									"id": "836500511",
									"picture": "https://a0.muscache.com/im/pictures/08ad5b03-1668-4f37-84aa-086ebd07fd0e.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 double bed", "1 sofa bed"]
									},
									"id": "836500874",
									"picture": "https://a0.muscache.com/im/pictures/111c10a8-099b-4a73-8f82-993efb4464c0.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
									},
									"id": "941632169",
									"picture": "https://a0.muscache.com/im/pictures/62618a09-840a-4974-93a2-766742cbf42f.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Rated 4.6 out of 5 for cleanliness"]
									},
									"id": "941632269",
									"picture": "https://a0.muscache.com/im/pictures/91ee3bfb-058a-4cb4-9c08-52c87becb507.jpg?im_w=720"
								}],
								"contextualPicturesPageInfo": {
									"__typename": "DoraViaductPageInfo",
									"hasNextPage": true,
									"endCursor": "NQ=="
								},
								"formattedBadges": [{
									"__typename": "DoraFormattedBadge",
									"backgroundColor": "rgba(255, 255, 255, 0.95)",
									"borderColor": "rgba(0, 0, 0, 0.2)",
									"text": "SUPERHOST",
									"textColor": "#222222"
								}],
								"homeDetails": [{
									"__typename": "DoraBasicListItem",
									"title": "4 guests"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "1 bedroom"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "2 beds"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "1 bath"
								}],
								"id": "37882202",
								"isAutoTranslated": true,
								"isNewListing": false,
								"isSuperhost": true,
								"kickerContent": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Entire rental unit in Ingleses Norte"],
									"textColor": null
								},
								"lat": -27.42994,
								"listingObjType": "REGULAR",
								"lng": -48.39867,
								"localizedDistanceText": null,
								"locationTitle": null,
								"mainSectionMessage": {
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 11 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								},
								"mainSectionMessages": [{
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 11 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								}],
								"name": "Full apartment on the waterfront.",
								"overview": [{
									"__typename": "DoraBasicListItem",
									"title": "Entire rental unit"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "Ingleses Norte"
								}],
								"pdpDisplayExtensions": [],
								"pdpType": "MARKETPLACE",
								"pdpUrlType": "ROOMS",
								"personCapacity": 4,
								"pictureUrls": [],
								"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
								"relaxedFilterLabels": null,
								"reviewsCount": 56,
								"roomTypeCategory": "entire_home",
								"roomTypeId": null,
								"showPhotoSwipeIndicator": true,
								"summary": null,
								"tierId": 0,
								"titlePrependedIconId": "COMPACT_TRANSLATE"
							},
							"listingParamOverrides": {
								"__typename": "DoraListingParamOverrides",
								"adults": 2,
								"categoryTag": null,
								"causeId": null,
								"checkin": "2022-01-11",
								"checkout": "2022-01-14",
								"children": 0,
								"infants": 0,
								"relaxedAmenityIds": null
							},
							"luxuryInfo": null,
							"pricingQuote": {
								"__typename": "DoraPricingQuote",
								"applicableDiscounts": null,
								"barDisplayPriceWithoutDiscount": null,
								"canInstantBook": true,
								"displayRateDisplayStrategy": null,
								"monthlyPriceFactor": 0.0,
								"price": {
									"__typename": "DoraPrice",
									"lineItemType": null,
									"localizedExplanation": null,
									"localizedTitle": "Total",
									"priceItems": [{
										"__typename": "DoraPrice",
										"lineItemType": 2,
										"localizedExplanation": null,
										"localizedTitle": "R$220 x 3 nights",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 660.0,
											"amountFormatted": "R$660",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 5,
										"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
										"localizedTitle": "Cleaning fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 140.0,
											"amountFormatted": "R$140",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 4,
										"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
										"localizedTitle": "Service fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 113.0,
											"amountFormatted": "R$113",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}],
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 913.0,
										"amountFormatted": "R$913",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								},
								"priceDropDisclaimer": null,
								"priceString": "R$258",
								"rate": {
									"__typename": "DoraCurrencyAmount",
									"amount": 258.0,
									"amountFormatted": "R$258",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"rateType": "nightly",
								"rateWithoutDiscount": null,
								"rateWithServiceFee": {
									"__typename": "DoraCurrencyAmount",
									"amount": 258.0,
									"amountFormatted": "R$258",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"secondaryPriceString": null,
								"shouldShowFromLabel": false,
								"totalPriceDisclaimer": null,
								"totalPriceWithoutDiscount": null,
								"weeklyPriceFactor": 0.0,
								"structuredStayDisplayPrice": {
									"__typename": "DoraStructuredDisplayPrice",
									"primaryLine": {
										"__typename": "DoraQualifiedDisplayPriceLine",
										"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$258 per night",
										"price": "R$258",
										"qualifier": "/ night",
										"concatQualifierLeft": false
									},
									"secondaryLine": {
										"__typename": "DoraBasicDisplayPriceLine",
										"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$913 total",
										"price": "R$913 total"
									},
									"explanationData": {
										"__typename": "DoraDisplayPriceExplanationData",
										"title": "Price breakdown",
										"priceDetails": [{
											"__typename": "DoraDisplayPriceExplanationLineGroup",
											"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
											"items": [{
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "R$220 x 3 nights",
												"priceString": "R$660",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Cleaning fee",
												"priceString": "R$140",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Service fee",
												"priceString": "R$113",
												"explanationData": null
											}],
											"renderBorderTop": false,
											"collapsable": null
										}]
									},
									"explanationDataDisplayPosition": "SECONDARY_LINE",
									"explanationDataDisplayPriceTriggerType": null
								}
							},
							"verified": {
								"__typename": "DoraVerified",
								"badgeSecondaryText": "Verified",
								"badgeText": "Plus",
								"enabled": false,
								"kickerBadgeType": "filled"
							},
							"verifiedCard": false
						}, {
							"__typename": "DoraListingItem",
							"listing": {
								"__typename": "DoraListing",
								"avgRating": 4.88,
								"contextualPictures": [{
									"__typename": "DoraPicture",
									"caption": null,
									"id": "1137291622",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-25294682/original/bb9bf951-b978-42f5-adf4-3a9101dbf3fd.jpeg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["2 beds", "1 bedroom"]
									},
									"id": "1137291678",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-25294682/original/f2f65615-0e28-4ceb-92a6-0ada7b5fbf56.jpeg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 bath"]
									},
									"id": "1137291675",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-25294682/original/f98e71f3-dbbf-4b0d-b03a-b2068df4bb4a.jpeg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 queen bed", "1 sofa bed", "more"]
									},
									"id": "1137291580",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-25294682/original/32f34d51-a6f4-4d4f-a07b-a151146e816b.jpeg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
									},
									"id": "1137291660",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-25294682/original/85eab3b4-f5ee-4bbb-bb3d-f2bd2c0ea9f2.jpeg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Rated 4.8 out of 5 for cleanliness"]
									},
									"id": "1137291655",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-25294682/original/e9326ed6-004d-40d2-ba6f-8b1b6b28b4ac.jpeg?im_w=720"
								}],
								"contextualPicturesPageInfo": {
									"__typename": "DoraViaductPageInfo",
									"hasNextPage": true,
									"endCursor": "NQ=="
								},
								"formattedBadges": [{
									"__typename": "DoraFormattedBadge",
									"backgroundColor": "rgba(255, 255, 255, 0.95)",
									"borderColor": "rgba(0, 0, 0, 0.2)",
									"text": "SUPERHOST",
									"textColor": "#222222"
								}],
								"homeDetails": [{
									"__typename": "DoraBasicListItem",
									"title": "3 guests"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "1 bedroom"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "2 beds"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "1 bath"
								}],
								"id": "25294682",
								"isAutoTranslated": false,
								"isNewListing": false,
								"isSuperhost": true,
								"kickerContent": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Entire condominium (condo) in Lagoa da Conceição"],
									"textColor": null
								},
								"lat": -27.606,
								"listingObjType": "REGULAR",
								"lng": -48.48143,
								"localizedDistanceText": null,
								"locationTitle": null,
								"mainSectionMessage": {
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 10 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								},
								"mainSectionMessages": [{
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 10 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								}],
								"name": "Sossego,internet boa e verde!Studio aconchegante!",
								"overview": [{
									"__typename": "DoraBasicListItem",
									"title": "Entire condominium (condo)"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "Lagoa da Conceição"
								}],
								"pdpDisplayExtensions": [],
								"pdpType": "MARKETPLACE",
								"pdpUrlType": "ROOMS",
								"personCapacity": 3,
								"pictureUrls": [],
								"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
								"relaxedFilterLabels": null,
								"reviewsCount": 106,
								"roomTypeCategory": "entire_home",
								"roomTypeId": null,
								"showPhotoSwipeIndicator": true,
								"summary": null,
								"tierId": 0,
								"titlePrependedIconId": null
							},
							"listingParamOverrides": {
								"__typename": "DoraListingParamOverrides",
								"adults": 2,
								"categoryTag": null,
								"causeId": null,
								"checkin": "2022-01-10",
								"checkout": "2022-01-14",
								"children": 0,
								"infants": 0,
								"relaxedAmenityIds": null
							},
							"luxuryInfo": null,
							"pricingQuote": {
								"__typename": "DoraPricingQuote",
								"applicableDiscounts": null,
								"barDisplayPriceWithoutDiscount": null,
								"canInstantBook": true,
								"displayRateDisplayStrategy": null,
								"monthlyPriceFactor": 0.0,
								"price": {
									"__typename": "DoraPrice",
									"lineItemType": null,
									"localizedExplanation": null,
									"localizedTitle": "Total",
									"priceItems": [{
										"__typename": "DoraPrice",
										"lineItemType": 2,
										"localizedExplanation": null,
										"localizedTitle": "R$349 x 4 nights",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 1396.0,
											"amountFormatted": "R$1,396",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 5,
										"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
										"localizedTitle": "Cleaning fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 39.0,
											"amountFormatted": "R$39",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 4,
										"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
										"localizedTitle": "Service fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 203.0,
											"amountFormatted": "R$203",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}],
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1638.0,
										"amountFormatted": "R$1,638",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								},
								"priceDropDisclaimer": null,
								"priceString": "R$400",
								"rate": {
									"__typename": "DoraCurrencyAmount",
									"amount": 400.0,
									"amountFormatted": "R$400",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"rateType": "nightly",
								"rateWithoutDiscount": null,
								"rateWithServiceFee": {
									"__typename": "DoraCurrencyAmount",
									"amount": 400.0,
									"amountFormatted": "R$400",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"secondaryPriceString": null,
								"shouldShowFromLabel": false,
								"totalPriceDisclaimer": null,
								"totalPriceWithoutDiscount": null,
								"weeklyPriceFactor": 0.0,
								"structuredStayDisplayPrice": {
									"__typename": "DoraStructuredDisplayPrice",
									"primaryLine": {
										"__typename": "DoraQualifiedDisplayPriceLine",
										"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$400 per night",
										"price": "R$400",
										"qualifier": "/ night",
										"concatQualifierLeft": false
									},
									"secondaryLine": {
										"__typename": "DoraBasicDisplayPriceLine",
										"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$1,638 total",
										"price": "R$1,638 total"
									},
									"explanationData": {
										"__typename": "DoraDisplayPriceExplanationData",
										"title": "Price breakdown",
										"priceDetails": [{
											"__typename": "DoraDisplayPriceExplanationLineGroup",
											"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
											"items": [{
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "R$349 x 4 nights",
												"priceString": "R$1,396",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Cleaning fee",
												"priceString": "R$39",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Service fee",
												"priceString": "R$203",
												"explanationData": null
											}],
											"renderBorderTop": false,
											"collapsable": null
										}]
									},
									"explanationDataDisplayPosition": "SECONDARY_LINE",
									"explanationDataDisplayPriceTriggerType": null
								}
							},
							"verified": {
								"__typename": "DoraVerified",
								"badgeSecondaryText": "Verified",
								"badgeText": "Plus",
								"enabled": false,
								"kickerBadgeType": "filled"
							},
							"verifiedCard": false
						}, {
							"__typename": "DoraListingItem",
							"listing": {
								"__typename": "DoraListing",
								"avgRating": 4.99,
								"contextualPictures": [{
									"__typename": "DoraPicture",
									"caption": null,
									"id": "847440942",
									"picture": "https://a0.muscache.com/im/pictures/4bd7d559-db3f-41e1-b5ff-d635d7972fff.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["3 beds", "2 bedrooms"]
									},
									"id": "847457115",
									"picture": "https://a0.muscache.com/im/pictures/3e064992-0158-444f-b461-bcff87870d50.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["2 baths"]
									},
									"id": "847445758",
									"picture": "https://a0.muscache.com/im/pictures/268e4566-3d88-4f55-863f-fa38da1a2f3c.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["2 double beds", "1 single bed", "more"]
									},
									"id": "847454975",
									"picture": "https://a0.muscache.com/im/pictures/b4d7a17f-f8b8-42f7-8ff6-115d895f2210.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
									},
									"id": "847445777",
									"picture": "https://a0.muscache.com/im/pictures/75eb0eec-dd14-4382-b140-dab81a2fc53b.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Rated 4.9 out of 5 for cleanliness"]
									},
									"id": "847450996",
									"picture": "https://a0.muscache.com/im/pictures/ca86b6b7-e143-4f1a-8f70-65bc44f4fb45.jpg?im_w=720"
								}],
								"contextualPicturesPageInfo": {
									"__typename": "DoraViaductPageInfo",
									"hasNextPage": true,
									"endCursor": "NQ=="
								},
								"formattedBadges": [{
									"__typename": "DoraFormattedBadge",
									"backgroundColor": "rgba(255, 255, 255, 0.95)",
									"borderColor": "rgba(0, 0, 0, 0.2)",
									"text": "SUPERHOST",
									"textColor": "#222222"
								}],
								"homeDetails": [{
									"__typename": "DoraBasicListItem",
									"title": "4 guests"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "2 bedrooms"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "3 beds"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "2 baths"
								}],
								"id": "27914936",
								"isAutoTranslated": false,
								"isNewListing": false,
								"isSuperhost": true,
								"kickerContent": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Entire chalet in Lagoa da Conceição"],
									"textColor": null
								},
								"lat": -27.58806,
								"listingObjType": "REGULAR",
								"lng": -48.46135,
								"localizedDistanceText": null,
								"locationTitle": null,
								"mainSectionMessage": {
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 9 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								},
								"mainSectionMessages": [{
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 9 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								}],
								"name": "Enchanted Creek Forest Chalet",
								"overview": [{
									"__typename": "DoraBasicListItem",
									"title": "Entire chalet"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "Lagoa da Conceição"
								}],
								"pdpDisplayExtensions": [],
								"pdpType": "MARKETPLACE",
								"pdpUrlType": "ROOMS",
								"personCapacity": 4,
								"pictureUrls": [],
								"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
								"relaxedFilterLabels": null,
								"reviewsCount": 93,
								"roomTypeCategory": "entire_home",
								"roomTypeId": null,
								"showPhotoSwipeIndicator": true,
								"summary": null,
								"tierId": 0,
								"titlePrependedIconId": null
							},
							"listingParamOverrides": {
								"__typename": "DoraListingParamOverrides",
								"adults": 2,
								"categoryTag": null,
								"causeId": null,
								"checkin": "2022-01-09",
								"checkout": "2022-01-14",
								"children": 0,
								"infants": 0,
								"relaxedAmenityIds": null
							},
							"luxuryInfo": null,
							"pricingQuote": {
								"__typename": "DoraPricingQuote",
								"applicableDiscounts": null,
								"barDisplayPriceWithoutDiscount": null,
								"canInstantBook": true,
								"displayRateDisplayStrategy": null,
								"monthlyPriceFactor": 0.0,
								"price": {
									"__typename": "DoraPrice",
									"lineItemType": null,
									"localizedExplanation": null,
									"localizedTitle": "Total",
									"priceItems": [{
										"__typename": "DoraPrice",
										"lineItemType": 2,
										"localizedExplanation": null,
										"localizedTitle": "R$550 x 5 nights",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 2750.0,
											"amountFormatted": "R$2,750",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 5,
										"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
										"localizedTitle": "Cleaning fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 350.0,
											"amountFormatted": "R$350",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 4,
										"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
										"localizedTitle": "Service fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 438.0,
											"amountFormatted": "R$438",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}],
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 3538.0,
										"amountFormatted": "R$3,538",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								},
								"priceDropDisclaimer": null,
								"priceString": "R$638",
								"rate": {
									"__typename": "DoraCurrencyAmount",
									"amount": 638.0,
									"amountFormatted": "R$638",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"rateType": "nightly",
								"rateWithoutDiscount": null,
								"rateWithServiceFee": {
									"__typename": "DoraCurrencyAmount",
									"amount": 638.0,
									"amountFormatted": "R$638",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"secondaryPriceString": null,
								"shouldShowFromLabel": false,
								"totalPriceDisclaimer": null,
								"totalPriceWithoutDiscount": null,
								"weeklyPriceFactor": 0.0,
								"structuredStayDisplayPrice": {
									"__typename": "DoraStructuredDisplayPrice",
									"primaryLine": {
										"__typename": "DoraQualifiedDisplayPriceLine",
										"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$638 per night",
										"price": "R$638",
										"qualifier": "/ night",
										"concatQualifierLeft": false
									},
									"secondaryLine": {
										"__typename": "DoraBasicDisplayPriceLine",
										"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$3,538 total",
										"price": "R$3,538 total"
									},
									"explanationData": {
										"__typename": "DoraDisplayPriceExplanationData",
										"title": "Price breakdown",
										"priceDetails": [{
											"__typename": "DoraDisplayPriceExplanationLineGroup",
											"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
											"items": [{
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "R$550 x 5 nights",
												"priceString": "R$2,750",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Cleaning fee",
												"priceString": "R$350",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Service fee",
												"priceString": "R$438",
												"explanationData": null
											}],
											"renderBorderTop": false,
											"collapsable": null
										}]
									},
									"explanationDataDisplayPosition": "SECONDARY_LINE",
									"explanationDataDisplayPriceTriggerType": null
								}
							},
							"verified": {
								"__typename": "DoraVerified",
								"badgeSecondaryText": "Verified",
								"badgeText": "Plus",
								"enabled": false,
								"kickerBadgeType": "filled"
							},
							"verifiedCard": false
						}, {
							"__typename": "DoraListingItem",
							"listing": {
								"__typename": "DoraListing",
								"avgRating": 4.8,
								"contextualPictures": [{
									"__typename": "DoraPicture",
									"caption": null,
									"id": "910895453",
									"picture": "https://a0.muscache.com/im/pictures/ee03dadd-aee2-4021-9360-77a98cb07c4d.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["2 beds", "2 bedrooms"]
									},
									"id": "910895204",
									"picture": "https://a0.muscache.com/im/pictures/51ecf860-ba80-403a-a773-94b84d6f82d4.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 bath"]
									},
									"id": "910895109",
									"picture": "https://a0.muscache.com/im/pictures/f32a9a25-1e0f-4786-bcf6-7be7de56d53b.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["2 double beds"]
									},
									"id": "910895352",
									"picture": "https://a0.muscache.com/im/pictures/c4c321b1-782d-42cb-bae3-fe6d02c05f6a.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Wifi", "Kitchen", "Air conditioning"]
									},
									"id": "910895398",
									"picture": "https://a0.muscache.com/im/pictures/0f600281-4a40-4077-a818-4f49fb439f9a.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Rated 4.7 out of 5 for cleanliness"]
									},
									"id": "910895504",
									"picture": "https://a0.muscache.com/im/pictures/71a7db9b-ced4-4bbd-a167-9defe7c8cd4f.jpg?im_w=720"
								}],
								"contextualPicturesPageInfo": {
									"__typename": "DoraViaductPageInfo",
									"hasNextPage": true,
									"endCursor": "NQ=="
								},
								"formattedBadges": [],
								"homeDetails": [{
									"__typename": "DoraBasicListItem",
									"title": "4 guests"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "2 bedrooms"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "2 beds"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "1 bath"
								}],
								"id": "40152977",
								"isAutoTranslated": true,
								"isNewListing": false,
								"isSuperhost": false,
								"kickerContent": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Entire rental unit in Campeche"],
									"textColor": null
								},
								"lat": -27.6844,
								"listingObjType": "REGULAR",
								"lng": -48.4817,
								"localizedDistanceText": null,
								"locationTitle": null,
								"mainSectionMessage": {
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 11 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								},
								"mainSectionMessages": [{
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 11 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								}],
								"name": "Campeche Apart 06 - 50 mts from the beach",
								"overview": [{
									"__typename": "DoraBasicListItem",
									"title": "Entire rental unit"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "Campeche"
								}],
								"pdpDisplayExtensions": [],
								"pdpType": "MARKETPLACE",
								"pdpUrlType": "ROOMS",
								"personCapacity": 4,
								"pictureUrls": [],
								"previewAmenityNames": ["Wifi", "Kitchen", "Air conditioning"],
								"relaxedFilterLabels": null,
								"reviewsCount": 88,
								"roomTypeCategory": "entire_home",
								"roomTypeId": null,
								"showPhotoSwipeIndicator": true,
								"summary": null,
								"tierId": 0,
								"titlePrependedIconId": "COMPACT_TRANSLATE"
							},
							"listingParamOverrides": {
								"__typename": "DoraListingParamOverrides",
								"adults": 2,
								"categoryTag": null,
								"causeId": null,
								"checkin": "2022-01-11",
								"checkout": "2022-01-14",
								"children": 0,
								"infants": 0,
								"relaxedAmenityIds": null
							},
							"luxuryInfo": null,
							"pricingQuote": {
								"__typename": "DoraPricingQuote",
								"applicableDiscounts": null,
								"barDisplayPriceWithoutDiscount": null,
								"canInstantBook": true,
								"displayRateDisplayStrategy": null,
								"monthlyPriceFactor": 0.0,
								"price": {
									"__typename": "DoraPrice",
									"lineItemType": null,
									"localizedExplanation": null,
									"localizedTitle": "Total",
									"priceItems": [{
										"__typename": "DoraPrice",
										"lineItemType": 2,
										"localizedExplanation": null,
										"localizedTitle": "R$400 x 3 nights",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 1200.0,
											"amountFormatted": "R$1,200",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 5,
										"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
										"localizedTitle": "Cleaning fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 190.0,
											"amountFormatted": "R$190",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 4,
										"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
										"localizedTitle": "Service fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 196.0,
											"amountFormatted": "R$196",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}],
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1586.0,
										"amountFormatted": "R$1,586",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								},
								"priceDropDisclaimer": null,
								"priceString": "R$465",
								"rate": {
									"__typename": "DoraCurrencyAmount",
									"amount": 465.0,
									"amountFormatted": "R$465",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"rateType": "nightly",
								"rateWithoutDiscount": null,
								"rateWithServiceFee": {
									"__typename": "DoraCurrencyAmount",
									"amount": 465.0,
									"amountFormatted": "R$465",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"secondaryPriceString": null,
								"shouldShowFromLabel": false,
								"totalPriceDisclaimer": null,
								"totalPriceWithoutDiscount": null,
								"weeklyPriceFactor": 0.0,
								"structuredStayDisplayPrice": {
									"__typename": "DoraStructuredDisplayPrice",
									"primaryLine": {
										"__typename": "DoraQualifiedDisplayPriceLine",
										"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$465 per night",
										"price": "R$465",
										"qualifier": "/ night",
										"concatQualifierLeft": false
									},
									"secondaryLine": {
										"__typename": "DoraBasicDisplayPriceLine",
										"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$1,586 total",
										"price": "R$1,586 total"
									},
									"explanationData": {
										"__typename": "DoraDisplayPriceExplanationData",
										"title": "Price breakdown",
										"priceDetails": [{
											"__typename": "DoraDisplayPriceExplanationLineGroup",
											"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
											"items": [{
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "R$400 x 3 nights",
												"priceString": "R$1,200",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Cleaning fee",
												"priceString": "R$190",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Service fee",
												"priceString": "R$196",
												"explanationData": null
											}],
											"renderBorderTop": false,
											"collapsable": null
										}]
									},
									"explanationDataDisplayPosition": "SECONDARY_LINE",
									"explanationDataDisplayPriceTriggerType": null
								}
							},
							"verified": {
								"__typename": "DoraVerified",
								"badgeSecondaryText": "Verified",
								"badgeText": "Plus",
								"enabled": false,
								"kickerBadgeType": "filled"
							},
							"verifiedCard": false
						}, {
							"__typename": "DoraListingItem",
							"listing": {
								"__typename": "DoraListing",
								"avgRating": 4.72,
								"contextualPictures": [{
									"__typename": "DoraPicture",
									"caption": null,
									"id": "1155226667",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-22548373/original/a02c185d-ad07-4db5-bce5-85026910b136.jpeg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["2 beds", "2 bedrooms"]
									},
									"id": "1155226683",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-22548373/original/aeb1c4e3-f1f8-4770-bdaf-39bd26714d1f.jpeg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["2.5 baths"]
									},
									"id": "1155226699",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-22548373/original/81cf0083-38bc-4456-a830-b169ac458817.jpeg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 queen bed", "1 double bed"]
									},
									"id": "1155226681",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-22548373/original/e2bda0b8-3bd8-4415-829b-5b45e1a1d49d.jpeg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
									},
									"id": "1155226653",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-22548373/original/226db528-9bdd-4d74-8049-4c255e46c0d5.jpeg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Rated 4.8 out of 5 for cleanliness"]
									},
									"id": "1155226602",
									"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-22548373/original/919470f2-89d0-45a4-ad29-9fa907290e0f.jpeg?im_w=720"
								}],
								"contextualPicturesPageInfo": {
									"__typename": "DoraViaductPageInfo",
									"hasNextPage": true,
									"endCursor": "NQ=="
								},
								"formattedBadges": [{
									"__typename": "DoraFormattedBadge",
									"backgroundColor": "rgba(255, 255, 255, 0.95)",
									"borderColor": "rgba(0, 0, 0, 0.2)",
									"text": "SUPERHOST",
									"textColor": "#222222"
								}],
								"homeDetails": [{
									"__typename": "DoraBasicListItem",
									"title": "4 guests"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "2 bedrooms"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "2 beds"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "2.5 baths"
								}],
								"id": "22548373",
								"isAutoTranslated": true,
								"isNewListing": false,
								"isSuperhost": true,
								"kickerContent": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Entire rental unit in Canasvieiras"],
									"textColor": null
								},
								"lat": -27.43199,
								"listingObjType": "REGULAR",
								"lng": -48.4518,
								"localizedDistanceText": null,
								"locationTitle": null,
								"mainSectionMessage": {
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 11 – 13",
									"iconType": null,
									"type": "flexible_date_range"
								},
								"mainSectionMessages": [{
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 11 – 13",
									"iconType": null,
									"type": "flexible_date_range"
								}],
								"name": "Beautiful penthouse with hot tub and pool",
								"overview": [{
									"__typename": "DoraBasicListItem",
									"title": "Entire rental unit"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "Canasvieiras"
								}],
								"pdpDisplayExtensions": [],
								"pdpType": "MARKETPLACE",
								"pdpUrlType": "ROOMS",
								"personCapacity": 4,
								"pictureUrls": [],
								"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
								"relaxedFilterLabels": null,
								"reviewsCount": 32,
								"roomTypeCategory": "entire_home",
								"roomTypeId": null,
								"showPhotoSwipeIndicator": true,
								"summary": null,
								"tierId": 0,
								"titlePrependedIconId": "COMPACT_TRANSLATE"
							},
							"listingParamOverrides": {
								"__typename": "DoraListingParamOverrides",
								"adults": 2,
								"categoryTag": null,
								"causeId": null,
								"checkin": "2022-01-11",
								"checkout": "2022-01-13",
								"children": 0,
								"infants": 0,
								"relaxedAmenityIds": null
							},
							"luxuryInfo": null,
							"pricingQuote": {
								"__typename": "DoraPricingQuote",
								"applicableDiscounts": null,
								"barDisplayPriceWithoutDiscount": null,
								"canInstantBook": true,
								"displayRateDisplayStrategy": null,
								"monthlyPriceFactor": 0.0,
								"price": {
									"__typename": "DoraPrice",
									"lineItemType": null,
									"localizedExplanation": null,
									"localizedTitle": "Total",
									"priceItems": [{
										"__typename": "DoraPrice",
										"lineItemType": 2,
										"localizedExplanation": null,
										"localizedTitle": "R$480 x 2 nights",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 960.0,
											"amountFormatted": "R$960",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 5,
										"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
										"localizedTitle": "Cleaning fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 280.0,
											"amountFormatted": "R$280",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 4,
										"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
										"localizedTitle": "Service fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 175.0,
											"amountFormatted": "R$175",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}],
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1415.0,
										"amountFormatted": "R$1,415",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								},
								"priceDropDisclaimer": null,
								"priceString": "R$568",
								"rate": {
									"__typename": "DoraCurrencyAmount",
									"amount": 568.0,
									"amountFormatted": "R$568",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"rateType": "nightly",
								"rateWithoutDiscount": null,
								"rateWithServiceFee": {
									"__typename": "DoraCurrencyAmount",
									"amount": 568.0,
									"amountFormatted": "R$568",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"secondaryPriceString": null,
								"shouldShowFromLabel": false,
								"totalPriceDisclaimer": null,
								"totalPriceWithoutDiscount": null,
								"weeklyPriceFactor": 0.0,
								"structuredStayDisplayPrice": {
									"__typename": "DoraStructuredDisplayPrice",
									"primaryLine": {
										"__typename": "DoraQualifiedDisplayPriceLine",
										"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$568 per night",
										"price": "R$568",
										"qualifier": "/ night",
										"concatQualifierLeft": false
									},
									"secondaryLine": {
										"__typename": "DoraBasicDisplayPriceLine",
										"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$1,415 total",
										"price": "R$1,415 total"
									},
									"explanationData": {
										"__typename": "DoraDisplayPriceExplanationData",
										"title": "Price breakdown",
										"priceDetails": [{
											"__typename": "DoraDisplayPriceExplanationLineGroup",
											"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
											"items": [{
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "R$480 x 2 nights",
												"priceString": "R$960",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Cleaning fee",
												"priceString": "R$280",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Service fee",
												"priceString": "R$175",
												"explanationData": null
											}],
											"renderBorderTop": false,
											"collapsable": null
										}]
									},
									"explanationDataDisplayPosition": "SECONDARY_LINE",
									"explanationDataDisplayPriceTriggerType": null
								}
							},
							"verified": {
								"__typename": "DoraVerified",
								"badgeSecondaryText": "Verified",
								"badgeText": "Plus",
								"enabled": false,
								"kickerBadgeType": "filled"
							},
							"verifiedCard": false
						}, {
							"__typename": "DoraListingItem",
							"listing": {
								"__typename": "DoraListing",
								"avgRating": 4.55,
								"contextualPictures": [{
									"__typename": "DoraPicture",
									"caption": null,
									"id": "1059059715",
									"picture": "https://a0.muscache.com/im/pictures/7b3c952e-52ea-4f5c-b38b-98e260537cb5.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["4 beds", "1 bedroom"]
									},
									"id": "1059059765",
									"picture": "https://a0.muscache.com/im/pictures/6fb36958-f71f-4ff5-a8ef-0ca1c14668f4.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1.5 baths"]
									},
									"id": "886098291",
									"picture": "https://a0.muscache.com/im/pictures/4a429ede-a015-4220-a007-ea5d67949b6f.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 double bed", "1 sofa bed", "more"]
									},
									"id": "1038549948",
									"picture": "https://a0.muscache.com/im/pictures/ba12bd75-9bd7-4a3d-800f-99d0939d967a.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
									},
									"id": "1038549935",
									"picture": "https://a0.muscache.com/im/pictures/4b298a6b-399a-4cd8-8a37-dcbfe38127ab.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Rated 4.5 out of 5 for cleanliness"]
									},
									"id": "988158009",
									"picture": "https://a0.muscache.com/im/pictures/ca729ac9-112b-4fc7-8298-4107b7114cbc.jpg?im_w=720"
								}],
								"contextualPicturesPageInfo": {
									"__typename": "DoraViaductPageInfo",
									"hasNextPage": true,
									"endCursor": "NQ=="
								},
								"formattedBadges": [],
								"homeDetails": [{
									"__typename": "DoraBasicListItem",
									"title": "6 guests"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "1 bedroom"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "4 beds"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "1.5 baths"
								}],
								"id": "38952501",
								"isAutoTranslated": true,
								"isNewListing": false,
								"isSuperhost": false,
								"kickerContent": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Entire rental unit in Florianopolis, praia dos ingleses "],
									"textColor": null
								},
								"lat": -27.4445,
								"listingObjType": "REGULAR",
								"lng": -48.38375,
								"localizedDistanceText": null,
								"locationTitle": null,
								"mainSectionMessage": {
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 10 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								},
								"mainSectionMessages": [{
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 10 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								}],
								"name": "330 METERS FROM THE SEA-AP 304 SEA VIEW ENGLISH.",
								"overview": [{
									"__typename": "DoraBasicListItem",
									"title": "Entire rental unit"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "Florianopolis, praia dos ingleses "
								}],
								"pdpDisplayExtensions": [],
								"pdpType": "MARKETPLACE",
								"pdpUrlType": "ROOMS",
								"personCapacity": 6,
								"pictureUrls": [],
								"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
								"relaxedFilterLabels": null,
								"reviewsCount": 11,
								"roomTypeCategory": "entire_home",
								"roomTypeId": null,
								"showPhotoSwipeIndicator": true,
								"summary": null,
								"tierId": 0,
								"titlePrependedIconId": "COMPACT_TRANSLATE"
							},
							"listingParamOverrides": {
								"__typename": "DoraListingParamOverrides",
								"adults": 2,
								"categoryTag": null,
								"causeId": null,
								"checkin": "2022-01-10",
								"checkout": "2022-01-14",
								"children": 0,
								"infants": 0,
								"relaxedAmenityIds": null
							},
							"luxuryInfo": null,
							"pricingQuote": {
								"__typename": "DoraPricingQuote",
								"applicableDiscounts": null,
								"barDisplayPriceWithoutDiscount": null,
								"canInstantBook": false,
								"displayRateDisplayStrategy": null,
								"monthlyPriceFactor": 0.0,
								"price": {
									"__typename": "DoraPrice",
									"lineItemType": null,
									"localizedExplanation": null,
									"localizedTitle": "Total",
									"priceItems": [{
										"__typename": "DoraPrice",
										"lineItemType": 2,
										"localizedExplanation": null,
										"localizedTitle": "R$199 x 4 nights",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 796.0,
											"amountFormatted": "R$796",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 5,
										"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
										"localizedTitle": "Cleaning fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 99.0,
											"amountFormatted": "R$99",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 4,
										"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
										"localizedTitle": "Service fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 126.0,
											"amountFormatted": "R$126",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}],
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1021.0,
										"amountFormatted": "R$1,021",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								},
								"priceDropDisclaimer": null,
								"priceString": "R$231",
								"rate": {
									"__typename": "DoraCurrencyAmount",
									"amount": 231.0,
									"amountFormatted": "R$231",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"rateType": "nightly",
								"rateWithoutDiscount": null,
								"rateWithServiceFee": {
									"__typename": "DoraCurrencyAmount",
									"amount": 231.0,
									"amountFormatted": "R$231",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"secondaryPriceString": null,
								"shouldShowFromLabel": false,
								"totalPriceDisclaimer": null,
								"totalPriceWithoutDiscount": null,
								"weeklyPriceFactor": 0.0,
								"structuredStayDisplayPrice": {
									"__typename": "DoraStructuredDisplayPrice",
									"primaryLine": {
										"__typename": "DoraQualifiedDisplayPriceLine",
										"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$231 per night",
										"price": "R$231",
										"qualifier": "/ night",
										"concatQualifierLeft": false
									},
									"secondaryLine": {
										"__typename": "DoraBasicDisplayPriceLine",
										"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$1,021 total",
										"price": "R$1,021 total"
									},
									"explanationData": {
										"__typename": "DoraDisplayPriceExplanationData",
										"title": "Price breakdown",
										"priceDetails": [{
											"__typename": "DoraDisplayPriceExplanationLineGroup",
											"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
											"items": [{
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "R$199 x 4 nights",
												"priceString": "R$796",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Cleaning fee",
												"priceString": "R$99",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Service fee",
												"priceString": "R$126",
												"explanationData": null
											}],
											"renderBorderTop": false,
											"collapsable": null
										}]
									},
									"explanationDataDisplayPosition": "SECONDARY_LINE",
									"explanationDataDisplayPriceTriggerType": null
								}
							},
							"verified": {
								"__typename": "DoraVerified",
								"badgeSecondaryText": "Verified",
								"badgeText": "Plus",
								"enabled": false,
								"kickerBadgeType": "filled"
							},
							"verifiedCard": false
						}, {
							"__typename": "DoraListingItem",
							"listing": {
								"__typename": "DoraListing",
								"avgRating": 5.0,
								"contextualPictures": [{
									"__typename": "DoraPicture",
									"caption": null,
									"id": "1010692135",
									"picture": "https://a0.muscache.com/im/pictures/f9d35585-d5af-47d6-b907-f0c2c3babf2a.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["2 beds", "Studio"]
									},
									"id": "1010692138",
									"picture": "https://a0.muscache.com/im/pictures/4a98f0a8-2ce7-42be-9be0-ae79889b2c8f.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 bath"]
									},
									"id": "1010692139",
									"picture": "https://a0.muscache.com/im/pictures/09d2f4b5-a9b0-4a7a-baca-537326237aab.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 double bed", "1 sofa bed"]
									},
									"id": "1010692140",
									"picture": "https://a0.muscache.com/im/pictures/bdb1f7ca-1cd5-4ebd-997c-3b76ab14214d.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
									},
									"id": "1010692142",
									"picture": "https://a0.muscache.com/im/pictures/c2d2f16b-004f-41cd-9237-49dffae1fb54.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Rated 5 out of 5 for cleanliness"]
									},
									"id": "1010692146",
									"picture": "https://a0.muscache.com/im/pictures/7834fbfb-2adf-43a5-8d8d-9411b1cf2cf5.jpg?im_w=720"
								}],
								"contextualPicturesPageInfo": {
									"__typename": "DoraViaductPageInfo",
									"hasNextPage": true,
									"endCursor": "NQ=="
								},
								"formattedBadges": [{
									"__typename": "DoraFormattedBadge",
									"backgroundColor": "rgba(255, 255, 255, 0.95)",
									"borderColor": "rgba(0, 0, 0, 0.2)",
									"text": "SUPERHOST",
									"textColor": "#222222"
								}],
								"homeDetails": [{
									"__typename": "DoraBasicListItem",
									"title": "4 guests"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "Studio"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "2 beds"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "1 bath"
								}],
								"id": "43545097",
								"isAutoTranslated": true,
								"isNewListing": false,
								"isSuperhost": true,
								"kickerContent": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Entire rental unit in Centro"],
									"textColor": null
								},
								"lat": -27.58706,
								"listingObjType": "REGULAR",
								"lng": -48.54394,
								"localizedDistanceText": null,
								"locationTitle": null,
								"mainSectionMessage": {
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 11 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								},
								"mainSectionMessages": [{
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 11 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								}],
								"name": "Amazing Studio in Floripa",
								"overview": [{
									"__typename": "DoraBasicListItem",
									"title": "Entire rental unit"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "Centro"
								}],
								"pdpDisplayExtensions": [],
								"pdpType": "MARKETPLACE",
								"pdpUrlType": "ROOMS",
								"personCapacity": 4,
								"pictureUrls": [],
								"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
								"relaxedFilterLabels": null,
								"reviewsCount": 15,
								"roomTypeCategory": "entire_home",
								"roomTypeId": null,
								"showPhotoSwipeIndicator": true,
								"summary": null,
								"tierId": 0,
								"titlePrependedIconId": "COMPACT_TRANSLATE"
							},
							"listingParamOverrides": {
								"__typename": "DoraListingParamOverrides",
								"adults": 2,
								"categoryTag": null,
								"causeId": null,
								"checkin": "2022-01-11",
								"checkout": "2022-01-14",
								"children": 0,
								"infants": 0,
								"relaxedAmenityIds": null
							},
							"luxuryInfo": null,
							"pricingQuote": {
								"__typename": "DoraPricingQuote",
								"applicableDiscounts": null,
								"barDisplayPriceWithoutDiscount": null,
								"canInstantBook": true,
								"displayRateDisplayStrategy": null,
								"monthlyPriceFactor": 0.0,
								"price": {
									"__typename": "DoraPrice",
									"lineItemType": null,
									"localizedExplanation": null,
									"localizedTitle": "Total",
									"priceItems": [{
										"__typename": "DoraPrice",
										"lineItemType": 2,
										"localizedExplanation": null,
										"localizedTitle": "R$389 x 3 nights",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 1167.0,
											"amountFormatted": "R$1,167",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 5,
										"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
										"localizedTitle": "Cleaning fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 300.0,
											"amountFormatted": "R$300",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 4,
										"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
										"localizedTitle": "Service fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 207.0,
											"amountFormatted": "R$207",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}],
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1674.0,
										"amountFormatted": "R$1,674",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								},
								"priceDropDisclaimer": null,
								"priceString": "R$458",
								"rate": {
									"__typename": "DoraCurrencyAmount",
									"amount": 458.0,
									"amountFormatted": "R$458",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"rateType": "nightly",
								"rateWithoutDiscount": null,
								"rateWithServiceFee": {
									"__typename": "DoraCurrencyAmount",
									"amount": 458.0,
									"amountFormatted": "R$458",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"secondaryPriceString": null,
								"shouldShowFromLabel": false,
								"totalPriceDisclaimer": null,
								"totalPriceWithoutDiscount": null,
								"weeklyPriceFactor": 0.0,
								"structuredStayDisplayPrice": {
									"__typename": "DoraStructuredDisplayPrice",
									"primaryLine": {
										"__typename": "DoraQualifiedDisplayPriceLine",
										"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$458 per night",
										"price": "R$458",
										"qualifier": "/ night",
										"concatQualifierLeft": false
									},
									"secondaryLine": {
										"__typename": "DoraBasicDisplayPriceLine",
										"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$1,674 total",
										"price": "R$1,674 total"
									},
									"explanationData": {
										"__typename": "DoraDisplayPriceExplanationData",
										"title": "Price breakdown",
										"priceDetails": [{
											"__typename": "DoraDisplayPriceExplanationLineGroup",
											"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
											"items": [{
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "R$389 x 3 nights",
												"priceString": "R$1,167",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Cleaning fee",
												"priceString": "R$300",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Service fee",
												"priceString": "R$207",
												"explanationData": null
											}],
											"renderBorderTop": false,
											"collapsable": null
										}]
									},
									"explanationDataDisplayPosition": "SECONDARY_LINE",
									"explanationDataDisplayPriceTriggerType": null
								}
							},
							"verified": {
								"__typename": "DoraVerified",
								"badgeSecondaryText": "Verified",
								"badgeText": "Plus",
								"enabled": false,
								"kickerBadgeType": "filled"
							},
							"verifiedCard": false
						}, {
							"__typename": "DoraListingItem",
							"listing": {
								"__typename": "DoraListing",
								"avgRating": 4.9,
								"contextualPictures": [{
									"__typename": "DoraPicture",
									"caption": null,
									"id": "664323390",
									"picture": "https://a0.muscache.com/im/pictures/460679c0-cd60-4c3d-b551-28cefdfdda8b.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 bed", "1 bedroom"]
									},
									"id": "664322507",
									"picture": "https://a0.muscache.com/im/pictures/9fe698b2-b2ad-45bf-b914-7426e69a270b.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 bath"]
									},
									"id": "664322579",
									"picture": "https://a0.muscache.com/im/pictures/68417776-4457-4094-b3b5-80b333ce1cc6.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["1 double bed", "1 couch"]
									},
									"id": "664322399",
									"picture": "https://a0.muscache.com/im/pictures/e7210cdf-e595-46da-8253-34b5bbb7bc07.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Wifi", "Kitchen", "Air conditioning"]
									},
									"id": "664322308",
									"picture": "https://a0.muscache.com/im/pictures/93e87e1c-4138-41ec-be98-797ccff5d560.jpg?im_w=720"
								}, {
									"__typename": "DoraPicture",
									"caption": {
										"__typename": "DoraKickerContent",
										"kickerBadge": null,
										"messages": ["Rated 4.9 out of 5 for cleanliness"]
									},
									"id": "664322670",
									"picture": "https://a0.muscache.com/im/pictures/a3af0d8a-7c94-4876-9543-5d341fa7d6cf.jpg?im_w=720"
								}],
								"contextualPicturesPageInfo": {
									"__typename": "DoraViaductPageInfo",
									"hasNextPage": true,
									"endCursor": "NQ=="
								},
								"formattedBadges": [{
									"__typename": "DoraFormattedBadge",
									"backgroundColor": "rgba(255, 255, 255, 0.95)",
									"borderColor": "rgba(0, 0, 0, 0.2)",
									"text": "SUPERHOST",
									"textColor": "#222222"
								}],
								"homeDetails": [{
									"__typename": "DoraBasicListItem",
									"title": "3 guests"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "1 bedroom"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "1 bed"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "1 bath"
								}],
								"id": "18267670",
								"isAutoTranslated": true,
								"isNewListing": false,
								"isSuperhost": true,
								"kickerContent": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Entire loft in Florianopolis"],
									"textColor": null
								},
								"lat": -27.70096,
								"listingObjType": "REGULAR",
								"lng": -48.49441,
								"localizedDistanceText": null,
								"locationTitle": null,
								"mainSectionMessage": {
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 9 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								},
								"mainSectionMessages": [{
									"__typename": "DoraMainSectionMessage",
									"body": null,
									"bodyType": null,
									"headline": "Jan 9 – 14",
									"iconType": null,
									"type": "flexible_date_range"
								}],
								"name": "Loft, love ❤️ and foot on the sand of the Campeche Sea",
								"overview": [{
									"__typename": "DoraBasicListItem",
									"title": "Entire loft"
								}, {
									"__typename": "DoraBasicListItem",
									"title": "Florianopolis"
								}],
								"pdpDisplayExtensions": [],
								"pdpType": "MARKETPLACE",
								"pdpUrlType": "ROOMS",
								"personCapacity": 3,
								"pictureUrls": [],
								"previewAmenityNames": ["Wifi", "Kitchen", "Air conditioning"],
								"relaxedFilterLabels": null,
								"reviewsCount": 32,
								"roomTypeCategory": "entire_home",
								"roomTypeId": null,
								"showPhotoSwipeIndicator": true,
								"summary": null,
								"tierId": 0,
								"titlePrependedIconId": "COMPACT_TRANSLATE"
							},
							"listingParamOverrides": {
								"__typename": "DoraListingParamOverrides",
								"adults": 2,
								"categoryTag": null,
								"causeId": null,
								"checkin": "2022-01-09",
								"checkout": "2022-01-14",
								"children": 0,
								"infants": 0,
								"relaxedAmenityIds": null
							},
							"luxuryInfo": null,
							"pricingQuote": {
								"__typename": "DoraPricingQuote",
								"applicableDiscounts": null,
								"barDisplayPriceWithoutDiscount": null,
								"canInstantBook": true,
								"displayRateDisplayStrategy": null,
								"monthlyPriceFactor": 0.0,
								"price": {
									"__typename": "DoraPrice",
									"lineItemType": null,
									"localizedExplanation": null,
									"localizedTitle": "Total",
									"priceItems": [{
										"__typename": "DoraPrice",
										"lineItemType": 2,
										"localizedExplanation": null,
										"localizedTitle": "R$300 x 5 nights",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 1500.0,
											"amountFormatted": "R$1,500",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 5,
										"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
										"localizedTitle": "Cleaning fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 130.0,
											"amountFormatted": "R$130",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}, {
										"__typename": "DoraPrice",
										"lineItemType": 4,
										"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
										"localizedTitle": "Service fee",
										"total": {
											"__typename": "DoraCurrencyAmount",
											"amount": 230.0,
											"amountFormatted": "R$230",
											"currency": "BRL",
											"isMicrosAccuracy": false
										}
									}],
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1860.0,
										"amountFormatted": "R$1,860",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								},
								"priceDropDisclaimer": null,
								"priceString": "R$346",
								"rate": {
									"__typename": "DoraCurrencyAmount",
									"amount": 346.0,
									"amountFormatted": "R$346",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"rateType": "nightly",
								"rateWithoutDiscount": null,
								"rateWithServiceFee": {
									"__typename": "DoraCurrencyAmount",
									"amount": 346.0,
									"amountFormatted": "R$346",
									"currency": "BRL",
									"isMicrosAccuracy": false
								},
								"secondaryPriceString": null,
								"shouldShowFromLabel": false,
								"totalPriceDisclaimer": null,
								"totalPriceWithoutDiscount": null,
								"weeklyPriceFactor": 0.0,
								"structuredStayDisplayPrice": {
									"__typename": "DoraStructuredDisplayPrice",
									"primaryLine": {
										"__typename": "DoraQualifiedDisplayPriceLine",
										"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$346 per night",
										"price": "R$346",
										"qualifier": "/ night",
										"concatQualifierLeft": false
									},
									"secondaryLine": {
										"__typename": "DoraBasicDisplayPriceLine",
										"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
										"accessibilityLabel": "R$1,860 total",
										"price": "R$1,860 total"
									},
									"explanationData": {
										"__typename": "DoraDisplayPriceExplanationData",
										"title": "Price breakdown",
										"priceDetails": [{
											"__typename": "DoraDisplayPriceExplanationLineGroup",
											"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
											"items": [{
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "R$300 x 5 nights",
												"priceString": "R$1,500",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Cleaning fee",
												"priceString": "R$130",
												"explanationData": null
											}, {
												"__typename": "DoraDefaultExplanationLineItem",
												"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
												"description": "Service fee",
												"priceString": "R$230",
												"explanationData": null
											}],
											"renderBorderTop": false,
											"collapsable": null
										}]
									},
									"explanationDataDisplayPosition": "SECONDARY_LINE",
									"explanationDataDisplayPriceTriggerType": null
								}
							},
							"verified": {
								"__typename": "DoraVerified",
								"badgeSecondaryText": "Verified",
								"badgeText": "Plus",
								"enabled": false,
								"kickerBadgeType": "filled"
							},
							"verifiedCard": false
						}]
					}, {
						"__typename": "DoraExploreV3EarhartNavigationCardSection",
						"loggingContext": {
							"__typename": "DoraExploreV3SectionLoggingContext",
							"backendSearchId": "69336ef1-8540-4a18-9f56-060cd6d6d5e7",
							"bankaiSectionId": "277",
							"searchSessionId": "2a4e66e7-e314-463e-93d2-9151fd3a010f",
							"sectionId": "2a4e66e7-e314-463e-93d2-9151fd3a010f",
							"sectionIndex": "4",
							"sectionLoggingId": null,
							"sectionTypeUid": "STAYS_NEARBY_DESTINATION_PIVOTS"
						},
						"resultTypeDeprecated": "earhart_navigation_cards",
						"sectionComponentType": "earhart_navigation_cards_EARHART_NAVIGATION_CARDS_TEXT",
						"sectionComponentTypeV2": "EARHART_NAVIGATION_TEXT",
						"sectionMetadata": {
							"__typename": "DoraSectionMetadata",
							"campaignName": null,
							"cardLayout": null,
							"carouselItemSize": null,
							"defaultActiveGroupId": null,
							"destinationPlaceId": null,
							"isMimickingPaginated": false,
							"marqueeDuration": null,
							"pollingInfo": null,
							"reflectImageForRtl": false,
							"seeAllButtonOutlineColor": null,
							"seeAllButtonTextColor": null,
							"seeAllLinkTextColor": null,
							"shouldHideItemsFromMap": true
						},
						"experimentsMetadata": [],
						"title": "People also search for",
						"subtitle": null,
						"seeAllInfo": null,
						"sectionActions": [],
						"backgroundDisplayOptions": {
							"__typename": "DoraBackgroundDisplayOptions",
							"backgroundColor": null,
							"backgroundMode": null,
							"gradientColor": null,
							"largePicture": null,
							"loadingBackgroundColor": null,
							"lottieResource": null,
							"mediumPicture": null,
							"picture": null,
							"textColor": "#222222",
							"xLargePicture": null,
							"css": null
						},
						"displayConfiguration": {
							"__typename": "DoraDisplayConfiguration",
							"variant": "TEXT",
							"sectionWidthType": "DEFAULT"
						},
						"displayType": "carousel",
						"items": [{
							"__typename": "DoraEarhartNavigationCardItem",
							"airmoji": "nav_search",
							"badge": null,
							"canonicalUrl": null,
							"ctaType": "search",
							"ctaUrl": null,
							"largePicture": null,
							"logoImageConfig": null,
							"mediaAspectRatio": null,
							"mediumPicture": null,
							"picture": null,
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [],
								"placeId": "ChIJR_d_CByl2JQRL_uFSUfttUw",
								"query": "Bombinhas",
								"refinementPaths": ["/homes"],
								"resetFilters": false,
								"resetKeys": ["additional_refinements"],
								"tabId": "home_tab"
							},
							"subtitle": null,
							"title": "Bombinhas",
							"xLargePicture": null
						}, {
							"__typename": "DoraEarhartNavigationCardItem",
							"airmoji": "nav_search",
							"badge": null,
							"canonicalUrl": null,
							"ctaType": "search",
							"ctaUrl": null,
							"largePicture": null,
							"logoImageConfig": null,
							"mediaAspectRatio": null,
							"mediumPicture": null,
							"picture": null,
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [],
								"placeId": "ChIJrSrlwly22JQRxOut5vUEwC0",
								"query": "Balneário Camboriú",
								"refinementPaths": ["/homes"],
								"resetFilters": false,
								"resetKeys": ["additional_refinements"],
								"tabId": "home_tab"
							},
							"subtitle": null,
							"title": "Balneário Camboriú",
							"xLargePicture": null
						}, {
							"__typename": "DoraEarhartNavigationCardItem",
							"airmoji": "nav_search",
							"badge": null,
							"canonicalUrl": null,
							"ctaType": "search",
							"ctaUrl": null,
							"largePicture": null,
							"logoImageConfig": null,
							"mediaAspectRatio": null,
							"mediumPicture": null,
							"picture": null,
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [],
								"placeId": "ChIJ3bPNUVPj3JQRCejLuqVrL20",
								"query": "Curitiba",
								"refinementPaths": ["/homes"],
								"resetFilters": false,
								"resetKeys": ["additional_refinements"],
								"tabId": "home_tab"
							},
							"subtitle": null,
							"title": "Curitiba",
							"xLargePicture": null
						}, {
							"__typename": "DoraEarhartNavigationCardItem",
							"airmoji": "nav_search",
							"badge": null,
							"canonicalUrl": null,
							"ctaType": "search",
							"ctaUrl": null,
							"largePicture": null,
							"logoImageConfig": null,
							"mediaAspectRatio": null,
							"mediumPicture": null,
							"picture": null,
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [],
								"placeId": "ChIJ-8VjtNq12JQRbSKy_JNmYRk",
								"query": "Camboriú",
								"refinementPaths": ["/homes"],
								"resetFilters": false,
								"resetKeys": ["additional_refinements"],
								"tabId": "home_tab"
							},
							"subtitle": null,
							"title": "Camboriú",
							"xLargePicture": null
						}, {
							"__typename": "DoraEarhartNavigationCardItem",
							"airmoji": "nav_search",
							"badge": null,
							"canonicalUrl": null,
							"ctaType": "search",
							"ctaUrl": null,
							"largePicture": null,
							"logoImageConfig": null,
							"mediaAspectRatio": null,
							"mediumPicture": null,
							"picture": null,
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [],
								"placeId": "ChIJHzIEeEIyGZURpq7lgfAlHKc",
								"query": "Gramado",
								"refinementPaths": ["/homes"],
								"resetFilters": false,
								"resetKeys": ["additional_refinements"],
								"tabId": "home_tab"
							},
							"subtitle": null,
							"title": "Gramado",
							"xLargePicture": null
						}, {
							"__typename": "DoraEarhartNavigationCardItem",
							"airmoji": "nav_search",
							"badge": null,
							"canonicalUrl": null,
							"ctaType": "search",
							"ctaUrl": null,
							"largePicture": null,
							"logoImageConfig": null,
							"mediaAspectRatio": null,
							"mediumPicture": null,
							"picture": null,
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [],
								"placeId": "ChIJ0WGkg4FEzpQRrlsz_whLqZs",
								"query": "São Paulo",
								"refinementPaths": ["/homes"],
								"resetFilters": false,
								"resetKeys": ["additional_refinements"],
								"tabId": "home_tab"
							},
							"subtitle": null,
							"title": "São Paulo",
							"xLargePicture": null
						}],
						"earhartV3NavigationItems": null,
						"sectionItemLayout": null,
						"customSectionHeader": null,
						"spacingOptions": null
					}]
				},
				"filters": {
					"__typename": "DoraExploreFilters",
					"state": [{
						"__typename": "DoraFilterState",
						"key": "query",
						"value": {
							"__typename": "DoraStringValue",
							"stringValue": "Florianópolis - SC"
						},
						"valueType": "STRING"
					}, {
						"__typename": "DoraFilterState",
						"key": "place_id",
						"value": {
							"__typename": "DoraStringValue",
							"stringValue": "ChIJ1zLGsk45J5URRscEagtVvIE"
						},
						"valueType": "STRING"
					}, {
						"__typename": "DoraFilterState",
						"key": "parent_city_place_id",
						"value": null,
						"valueType": "STRING"
					}, {
						"__typename": "DoraFilterState",
						"key": "refinement_paths",
						"value": {
							"__typename": "DoraStringValues",
							"stringValues": ["/homes"]
						},
						"valueType": "STRING_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "checkin",
						"value": {
							"__typename": "DoraDoraDateValue",
							"dateValue": "2022-01-10"
						},
						"valueType": "DATE"
					}, {
						"__typename": "DoraFilterState",
						"key": "checkout",
						"value": {
							"__typename": "DoraDoraDateValue",
							"dateValue": "2022-01-13"
						},
						"valueType": "DATE"
					}, {
						"__typename": "DoraFilterState",
						"key": "flexible_date_search_filter_type",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "flexible_trip_dates",
						"value": {
							"__typename": "DoraStringValues",
							"stringValues": ["october", "september"]
						},
						"valueType": "STRING_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "flexible_trip_lengths",
						"value": {
							"__typename": "DoraStringValues",
							"stringValues": ["weekend_trip"]
						},
						"valueType": "STRING_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "date_picker_type",
						"value": {
							"__typename": "DoraStringValue",
							"stringValue": "calendar"
						},
						"valueType": "STRING"
					}, {
						"__typename": "DoraFilterState",
						"key": "omni_page_id",
						"value": null,
						"valueType": "LONG"
					}, {
						"__typename": "DoraFilterState",
						"key": "dynamic_product_ids",
						"value": null,
						"valueType": "LONG_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "location_search",
						"value": null,
						"valueType": "STRING"
					}, {
						"__typename": "DoraFilterState",
						"key": "ne_lat",
						"value": null,
						"valueType": "DOUBLE"
					}, {
						"__typename": "DoraFilterState",
						"key": "sw_lat",
						"value": null,
						"valueType": "DOUBLE"
					}, {
						"__typename": "DoraFilterState",
						"key": "ne_lng",
						"value": null,
						"valueType": "DOUBLE"
					}, {
						"__typename": "DoraFilterState",
						"key": "sw_lng",
						"value": null,
						"valueType": "DOUBLE"
					}, {
						"__typename": "DoraFilterState",
						"key": "adults",
						"value": {
							"__typename": "DoraIntegerValue",
							"integerValue": 2
						},
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "children",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "infants",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "min_beds",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "min_bedrooms",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "min_bathrooms",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "amenities",
						"value": {
							"__typename": "DoraIntegerValues",
							"integerValues": [12]
						},
						"valueType": "INTEGER_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "property_type_id",
						"value": null,
						"valueType": "INTEGER_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "room_types",
						"value": null,
						"valueType": "STRING_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "work_trip",
						"value": {
							"__typename": "DoraBoolValue",
							"booleanValue": false
						},
						"valueType": "BOOLEAN"
					}, {
						"__typename": "DoraFilterState",
						"key": "price_min",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "price_max",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "ib",
						"value": {
							"__typename": "DoraBoolValue",
							"booleanValue": false
						},
						"valueType": "BOOLEAN"
					}, {
						"__typename": "DoraFilterState",
						"key": "review_score",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "visible_review_count",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "cancel_policy",
						"value": null,
						"valueType": "INTEGER_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "search_monthly_stays",
						"value": {
							"__typename": "DoraBoolValue",
							"booleanValue": false
						},
						"valueType": "BOOLEAN"
					}, {
						"__typename": "DoraFilterState",
						"key": "discounted_stays",
						"value": null,
						"valueType": "BOOLEAN"
					}, {
						"__typename": "DoraFilterState",
						"key": "covid_eligible",
						"value": {
							"__typename": "DoraBoolValue",
							"booleanValue": false
						},
						"valueType": "BOOLEAN"
					}, {
						"__typename": "DoraFilterState",
						"key": "tier_ids",
						"value": null,
						"valueType": "INTEGER_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "superhost",
						"value": {
							"__typename": "DoraBoolValue",
							"booleanValue": false
						},
						"valueType": "BOOLEAN"
					}, {
						"__typename": "DoraFilterState",
						"key": "empHost",
						"value": {
							"__typename": "DoraBoolValue",
							"booleanValue": false
						},
						"valueType": "BOOLEAN"
					}, {
						"__typename": "DoraFilterState",
						"key": "cause_id",
						"value": null,
						"valueType": "LONG"
					}, {
						"__typename": "DoraFilterState",
						"key": "collection_ids",
						"value": null,
						"valueType": "INTEGER_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "disaster_id",
						"value": null,
						"valueType": "LONG"
					}, {
						"__typename": "DoraFilterState",
						"key": "rank_mode",
						"value": null,
						"valueType": "STRING"
					}, {
						"__typename": "DoraFilterState",
						"key": "flexible_cancellation",
						"value": {
							"__typename": "DoraBoolValue",
							"booleanValue": false
						},
						"valueType": "BOOLEAN"
					}, {
						"__typename": "DoraFilterState",
						"key": "is_nearby_subway",
						"value": {
							"__typename": "DoraBoolValue",
							"booleanValue": false
						},
						"valueType": "BOOLEAN"
					}, {
						"__typename": "DoraFilterState",
						"key": "listing_tags",
						"value": null,
						"valueType": "STRING_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "languages",
						"value": null,
						"valueType": "INTEGER_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "host_promotion_type_ids",
						"value": null,
						"valueType": "INTEGER_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "host_rule_type_ids",
						"value": null,
						"valueType": "INTEGER_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "contextual_type",
						"value": null,
						"valueType": "STRING"
					}, {
						"__typename": "DoraFilterState",
						"key": "poi_group",
						"value": null,
						"valueType": "STRING"
					}, {
						"__typename": "DoraFilterState",
						"key": "poi_tab",
						"value": null,
						"valueType": "STRING"
					}, {
						"__typename": "DoraFilterState",
						"key": "seasonal_cancellation_policy_ids",
						"value": null,
						"valueType": "INTEGER_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "max_travel_time",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "kg_and_tags",
						"value": null,
						"valueType": "STRING_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "kg_or_tags",
						"value": null,
						"valueType": "STRING_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "from_lts",
						"value": {
							"__typename": "DoraBoolValue",
							"booleanValue": false
						},
						"valueType": "BOOLEAN"
					}, {
						"__typename": "DoraFilterState",
						"key": "other_preference_tags",
						"value": null,
						"valueType": "STRING_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "search_mode",
						"value": null,
						"valueType": "STRING"
					}, {
						"__typename": "DoraFilterState",
						"key": "property_type_grouping_tags",
						"value": null,
						"valueType": "STRING_ARRAY"
					}, {
						"__typename": "DoraFilterState",
						"key": "radius",
						"value": null,
						"valueType": "INTEGER"
					}, {
						"__typename": "DoraFilterState",
						"key": "disable_auto_translation",
						"value": null,
						"valueType": "BOOLEAN"
					}],
					"sections": [{
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": null,
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": "Florianópolis - SC",
						"filterSectionId": "query",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": true,
						"subtitle": null,
						"title": "Location",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "query",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "Florianópolis - SC"
								},
								"valueType": "string"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "query",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "Florianópolis - SC"
									},
									"valueType": "string"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": true,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Location",
							"type": "text_input",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": null,
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": "Jan 10 – 13, 2022",
						"filterSectionId": "date_picker",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": true,
						"subtitle": null,
						"title": "Add dates",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "checkin",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "2022-01-10"
								},
								"valueType": "string"
							}, {
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "checkout",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "2022-01-13"
								},
								"valueType": "string"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "checkin",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "2022-01-10"
									},
									"valueType": "string"
								}, {
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "checkout",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "2022-01-13"
									},
									"valueType": "string"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": true,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Jan 10 – 13, 2022",
							"type": "date_picker",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": null,
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": "2 guests",
						"filterSectionId": "guest_picker",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": true,
						"subtitle": null,
						"title": "Add guests",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": "adults",
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": {
								"__typename": "DoraFilterItemMetadata",
								"averagePrice": null,
								"dateSubtitles": null,
								"description": null,
								"hideMaxHandle": null,
								"hideMinHandle": null,
								"highlightedDescription": null,
								"intervalLabels": null,
								"intervalValue": null,
								"intervalValues": null,
								"maxValue": 16,
								"minValue": 0,
								"priceHistogram": null,
								"segmentedControlValues": null,
								"segmentedControlLabels": null
							},
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "adults",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "2"
								},
								"valueType": "integer"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "adults",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "2"
									},
									"valueType": "integer"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": true,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "Ages 13 or above",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Adults",
							"type": "stepper",
							"value": 2
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": "children",
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": {
								"__typename": "DoraFilterItemMetadata",
								"averagePrice": null,
								"dateSubtitles": null,
								"description": null,
								"hideMaxHandle": null,
								"hideMinHandle": null,
								"highlightedDescription": null,
								"intervalLabels": null,
								"intervalValue": null,
								"intervalValues": null,
								"maxValue": 5,
								"minValue": 0,
								"priceHistogram": null,
								"segmentedControlValues": null,
								"segmentedControlLabels": null
							},
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "children",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "0"
								},
								"valueType": "integer"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "children",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "0"
									},
									"valueType": "integer"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "Ages 2–12",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Children",
							"type": "stepper",
							"value": 0
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": "infants",
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": {
								"__typename": "DoraFilterItemMetadata",
								"averagePrice": null,
								"dateSubtitles": null,
								"description": null,
								"hideMaxHandle": null,
								"hideMinHandle": null,
								"highlightedDescription": null,
								"intervalLabels": null,
								"intervalValue": null,
								"intervalValues": null,
								"maxValue": 5,
								"minValue": 0,
								"priceHistogram": null,
								"segmentedControlValues": null,
								"segmentedControlLabels": null
							},
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "infants",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "0"
								},
								"valueType": "integer"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "infants",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "0"
									},
									"valueType": "integer"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "Under 2",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Infants",
							"type": "stepper",
							"value": 0
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": [],
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": "Instant Book",
						"filterSectionId": "instant_book",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": null,
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "ib",
								"title": null,
								"value": {
									"__typename": "DoraBooleanWrapper",
									"booleanValue": true
								},
								"valueType": "boolean"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "ib",
									"value": {
										"__typename": "DoraBooleanWrapper",
										"booleanValue": true
									},
									"valueType": "boolean"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "Listings you can book without waiting for host approval",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Instant Book",
							"type": "switch",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": [],
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": "Price",
						"filterSectionId": "price_range",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": "Price range",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": {
								"__typename": "DoraFilterItemMetadata",
								"averagePrice": 507,
								"dateSubtitles": null,
								"description": null,
								"hideMaxHandle": null,
								"hideMinHandle": null,
								"highlightedDescription": null,
								"intervalLabels": null,
								"intervalValue": null,
								"intervalValues": null,
								"maxValue": 5000,
								"minValue": 52,
								"priceHistogram": [0, 6, 16, 16, 37, 47, 90, 98, 131, 207, 222, 156, 270, 256, 292, 194, 216, 170, 91, 80, 103, 22, 38, 52, 32, 40, 15, 6, 14, 16, 4, 12, 7, 24, 4, 2, 3, 11, 7, 5, 4, 10, 9, 4, 2, 2, 0, 6, 2, 44],
								"segmentedControlValues": null,
								"segmentedControlLabels": null
							},
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "price_min",
								"title": null,
								"value": null,
								"valueType": "integer"
							}, {
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "price_max",
								"title": null,
								"value": null,
								"valueType": "integer"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "price_min",
									"value": null,
									"valueType": "integer"
								}, {
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "price_max",
									"value": null,
									"valueType": "integer"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "The average nightly price is R$507",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "R$52 - R$5,000",
							"type": "price_slider",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": [],
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": "Type of place",
						"filterSectionId": "room_type",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": "Type of place",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "room_types",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "Entire home/apt"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "room_types",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "Entire home/apt"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "ROOM_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "Have a place to yourself",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Entire place",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "room_types",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "Private room"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "room_types",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "Private room"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "ROOM_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "Have your own room and share some common spaces",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Private room",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "room_types",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "Hotel room"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "room_types",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "Hotel room"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "ROOM_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "Have a private or shared room in a boutique hotel, hostel, and more",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Hotel room",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "room_types",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "Shared room"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "room_types",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "Shared room"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "ROOM_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "Stay in a shared space, like a common room",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Shared room",
							"type": "checkbox",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": [],
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": "Rooms and beds",
						"filterSectionId": "rooms_and_beds",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": "Rooms and beds",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": "min_beds",
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": {
								"__typename": "DoraFilterItemMetadata",
								"averagePrice": null,
								"dateSubtitles": null,
								"description": null,
								"hideMaxHandle": null,
								"hideMinHandle": null,
								"highlightedDescription": null,
								"intervalLabels": null,
								"intervalValue": null,
								"intervalValues": null,
								"maxValue": 16,
								"minValue": 0,
								"priceHistogram": null,
								"segmentedControlValues": null,
								"segmentedControlLabels": null
							},
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "min_beds",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "0"
								},
								"valueType": "integer"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "min_beds",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "0"
									},
									"valueType": "integer"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Beds",
							"type": "stepper",
							"value": 0
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": "min_bedrooms",
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": {
								"__typename": "DoraFilterItemMetadata",
								"averagePrice": null,
								"dateSubtitles": null,
								"description": null,
								"hideMaxHandle": null,
								"hideMinHandle": null,
								"highlightedDescription": null,
								"intervalLabels": null,
								"intervalValue": null,
								"intervalValues": null,
								"maxValue": 16,
								"minValue": 0,
								"priceHistogram": null,
								"segmentedControlValues": null,
								"segmentedControlLabels": null
							},
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "min_bedrooms",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "0"
								},
								"valueType": "integer"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "min_bedrooms",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "0"
									},
									"valueType": "integer"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Bedrooms",
							"type": "stepper",
							"value": 0
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": "min_bathrooms",
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": {
								"__typename": "DoraFilterItemMetadata",
								"averagePrice": null,
								"dateSubtitles": null,
								"description": null,
								"hideMaxHandle": null,
								"hideMinHandle": null,
								"highlightedDescription": null,
								"intervalLabels": null,
								"intervalValue": null,
								"intervalValues": null,
								"maxValue": 16,
								"minValue": 0,
								"priceHistogram": null,
								"segmentedControlValues": null,
								"segmentedControlLabels": null
							},
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "min_bathrooms",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "0"
								},
								"valueType": "integer"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "min_bathrooms",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "0"
									},
									"valueType": "integer"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Bathrooms",
							"type": "stepper",
							"value": 0
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": [],
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": "Verified places",
						"filterSectionId": "listing_tier",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": "Verified places",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "tier_ids",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "1"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "tier_ids",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "1"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "A selection of places to stay verified for quality and design",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Airbnb Plus",
							"type": "switch",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": null,
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": null,
						"filterSectionId": "other_options",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": "More options",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": "/superhost",
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "superhost",
								"title": null,
								"value": {
									"__typename": "DoraBooleanWrapper",
									"booleanValue": true
								},
								"valueType": "boolean"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "superhost",
									"value": {
										"__typename": "DoraBooleanWrapper",
										"booleanValue": true
									},
									"valueType": "boolean"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "Stay with recognized hosts",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Superhost",
							"type": "switch",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": "accessibility",
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": "Adjust features of your place to stay",
							"linkUnchecked": "Choose features of your place to stay",
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "accessibility",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "Select accessibility needs"
								},
								"valueType": "link"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "accessibility",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "Select accessibility needs"
									},
									"valueType": "link"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": "Select features you'll need to make your trip comfortable and accessible. For more info, ask the host or go to the Accessibility section of the listing page. Wide entrances are at least 32in (81cm).",
							"subsectionTitle": "Accessibility needs",
							"subsectionItems": [{
								"__typename": "DoraFilterSection",
								"airmojiName": "accomodation_home",
								"collapseSelectedSubtitles": [],
								"collapseText": null,
								"collapseThreshold": null,
								"dateRangeConstraint": null,
								"descriptionText": null,
								"expandText": null,
								"experimentsMetadata": [],
								"filterBarTitle": null,
								"filterSectionId": "accessibility_entering_the_home",
								"mutedText": null,
								"onFilterChange": null,
								"sectionType": null,
								"selected": false,
								"subtitle": null,
								"title": "Entering the place",
								"items": [{
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "110"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "110"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Step-free entrance to the room",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}, {
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "111"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "111"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Wide entrance for guests",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}, {
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "112"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "112"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Step-free path to the outdoor entrance",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}, {
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "114"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "114"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": "There's a parking spot that's been designated as suitable for a person with disabilities.",
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Disabled parking spot",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}]
							}, {
								"__typename": "DoraFilterSection",
								"airmojiName": "pdp_bed",
								"collapseSelectedSubtitles": [],
								"collapseText": null,
								"collapseThreshold": null,
								"dateRangeConstraint": null,
								"descriptionText": null,
								"expandText": null,
								"experimentsMetadata": [],
								"filterBarTitle": null,
								"filterSectionId": "accessibility_bedroom",
								"mutedText": null,
								"onFilterChange": null,
								"sectionType": null,
								"selected": false,
								"subtitle": null,
								"title": "Bedroom",
								"items": [{
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "115"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "115"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Step-free entrance to the room",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}, {
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "116"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "116"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Wide entrance",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}]
							}, {
								"__typename": "DoraFilterSection",
								"airmojiName": "an_shower",
								"collapseSelectedSubtitles": [],
								"collapseText": null,
								"collapseThreshold": null,
								"dateRangeConstraint": null,
								"descriptionText": null,
								"expandText": null,
								"experimentsMetadata": [],
								"filterBarTitle": null,
								"filterSectionId": "accessibility_bathroom",
								"mutedText": null,
								"onFilterChange": null,
								"sectionType": null,
								"selected": false,
								"subtitle": null,
								"title": "Bathroom",
								"items": [{
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "120"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "120"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Step-free entrance to the room",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}, {
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "121"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "121"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Wide doorway to guest bathroom",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}, {
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "294"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "294"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Fixed grab bars for shower",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}, {
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "295"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "295"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Fixed grab bars for toilet",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}, {
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "296"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "296"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Step-free shower",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}, {
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "297"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "297"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Shower chair",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}]
							}, {
								"__typename": "DoraFilterSection",
								"airmojiName": "dp_raise_price",
								"collapseSelectedSubtitles": [],
								"collapseText": null,
								"collapseThreshold": null,
								"dateRangeConstraint": null,
								"descriptionText": null,
								"expandText": null,
								"experimentsMetadata": [],
								"filterBarTitle": null,
								"filterSectionId": "accessibility_equipment",
								"mutedText": null,
								"onFilterChange": null,
								"sectionType": null,
								"selected": false,
								"subtitle": null,
								"title": "Equipment",
								"items": [{
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": null,
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "amenities",
										"title": null,
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "291"
										},
										"valueType": "array"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": true,
											"key": "amenities",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "291"
											},
											"valueType": "array"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": "AMENITY",
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "Ceiling hoist",
									"type": "checkbox",
									"value": null,
									"subsectionItems": null
								}]
							}],
							"subtitle": null,
							"subtitleChecked": "You've selected %{smart_count} option||||You've selected %{smart_count} options",
							"subtitleUnchecked": "Find a place to stay that meets your mobility needs",
							"title": "Accessibility",
							"type": "link",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": [],
						"collapseText": "Close amenities",
						"collapseThreshold": 3,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": "Show all amenities",
						"experimentsMetadata": [],
						"filterBarTitle": "Amenities",
						"filterSectionId": "amenities",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": "Amenities",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "8"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "8"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Kitchen",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "30"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "30"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Heating",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "5"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "5"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Air conditioning",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "33"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "33"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Washer",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "34"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "34"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Dryer",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "4"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "4"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Wifi",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "16"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "16"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Breakfast",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "27"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "27"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Indoor fireplace",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "46"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "46"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Iron",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "45"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "45"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Hair dryer",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "47"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "47"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Dedicated workspace",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "58"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "58"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "TV",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "286"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "286"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Crib",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "64"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "64"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "High chair",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "51"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "51"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Self check-in",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "35"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "35"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Smoke alarm",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "36"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "36"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Carbon monoxide alarm",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "78"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "78"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Private bathroom",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "kg_and_tags",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "Tag:681"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "kg_and_tags",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "Tag:681"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Ski-in/ski-out",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "kg_and_tags",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "Tag:789"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "kg_and_tags",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "Tag:789"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Beachfront",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "kg_and_tags",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "Tag:686"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "kg_and_tags",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "Tag:686"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Waterfront",
							"type": "checkbox",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": [],
						"collapseText": "Close facilities",
						"collapseThreshold": 3,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": "Show all facilities",
						"experimentsMetadata": [{
							"__typename": "DoraBankaiExperiment",
							"experiment": "ev_charger_web_v2",
							"treatment": "treatment"
						}],
						"filterBarTitle": "Facilities",
						"filterSectionId": "facilities",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": "Facilities",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "9"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "9"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Free parking on premises",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "15"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "15"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Gym",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "25"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "25"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Hot tub",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "7"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "7"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Pool",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "97"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "97"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "EV charger",
							"type": "checkbox",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": [],
						"collapseText": "Close property types",
						"collapseThreshold": 3,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": "Show all property types",
						"experimentsMetadata": [],
						"filterBarTitle": null,
						"filterSectionId": "property_types",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": "Property type",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "2"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "2"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "House",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "1"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "1"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Apartment",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "3"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "3"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Bed and breakfast",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "43"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "43"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Boutique hotel",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "38"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "38"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Bungalow",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "4"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "4"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Cabin",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "22"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "22"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Chalet",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "37"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "37"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Condominium",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "60"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "60"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Cottage",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "53"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "53"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Guest suite",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "40"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "40"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Guesthouse",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "45"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "45"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Hostel",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "42"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "42"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Hotel",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "35"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "35"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Loft",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "47"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "47"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Serviced apartment",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "36"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "36"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Townhouse",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "11"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "11"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Villa",
							"type": "checkbox",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": [],
						"collapseText": "Close unique stays",
						"collapseThreshold": 3,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": "Show all unique stays",
						"experimentsMetadata": [],
						"filterBarTitle": null,
						"filterSectionId": "unique_homes",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": "Unique stays",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "8"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "8"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Boat",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "32"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "32"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Camper/RV",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "58"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "58"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Campsite",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "54"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "54"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Casa particular (Cuba)",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "23"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "23"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Earth house",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "63"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "63"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Farm stay",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "44"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "44"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Nature lodge",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "34"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "34"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Tent",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "67"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "67"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Tiny house",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "property_type_id",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "15"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "property_type_id",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "15"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "PROPERTY_TYPE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Yurt",
							"type": "checkbox",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": ["Pets allowed"],
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": null,
						"filterSectionId": "house_rules",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": true,
						"subtitle": null,
						"title": "House rules",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "12"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "12"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": true,
							"states": ["SELECTED"],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Pets allowed",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "amenities",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "11"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "amenities",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "11"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "AMENITY",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Smoking allowed",
							"type": "checkbox",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": [],
						"collapseText": "Hide languages",
						"collapseThreshold": 3,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": "Show all",
						"experimentsMetadata": [],
						"filterBarTitle": null,
						"filterSectionId": "host_language",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": "Host language",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "1"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "1"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "English",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "2"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "2"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "French",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "4"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "4"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "German",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "8"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "8"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Japanese",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "16"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "16"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Italian",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "32"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "32"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Russian",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "64"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "64"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Spanish",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "128"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "128"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Chinese (Simplified)",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "256"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "256"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Arabic",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "512"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "512"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Hindi",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "1024"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "1024"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Portuguese",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "2048"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "2048"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Turkish",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "4096"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "4096"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Indonesian",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "8192"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "8192"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Dutch",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "16384"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "16384"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Korean",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "32768"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "32768"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Bengali",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "65536"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "65536"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Thai",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "131072"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "131072"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Punjabi",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "262144"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "262144"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Greek",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "524288"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "524288"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Sign",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "1048576"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "1048576"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Hebrew",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "2097152"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "2097152"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Polish",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "4194304"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "4194304"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Malay",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "8388608"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "8388608"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Tagalog",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "16777216"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "16777216"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Danish",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "33554432"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "33554432"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Swedish",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "67108864"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "67108864"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Norwegian",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "134217728"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "134217728"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Finnish",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "268435456"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "268435456"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Czech",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "536870912"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "536870912"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Hungarian",
							"type": "checkbox",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "languages",
								"title": null,
								"value": {
									"__typename": "DoraLongWrapper",
									"longValue": "1073741824"
								},
								"valueType": "array"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": true,
									"key": "languages",
									"value": {
										"__typename": "DoraLongWrapper",
										"longValue": "1073741824"
									},
									"valueType": "array"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": [],
							"subType": "HOST_LANGUAGE",
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Ukrainian",
							"type": "checkbox",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": null,
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": "Free cancellation",
						"filterSectionId": "flexible_cancellation",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": false,
						"subtitle": null,
						"title": "Free cancellation",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "flexible_cancellation",
								"title": null,
								"value": {
									"__typename": "DoraBooleanWrapper",
									"booleanValue": true
								},
								"valueType": "boolean"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "flexible_cancellation",
									"value": {
										"__typename": "DoraBooleanWrapper",
										"booleanValue": true
									},
									"valueType": "boolean"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": "Only show stays that offer free cancellation",
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": null,
							"type": "switch",
							"value": null
						}],
						"subsections": []
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": null,
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": "Jan 10 – 13, 2022",
						"filterSectionId": "stays_date_picker",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": true,
						"subtitle": null,
						"title": "Add dates",
						"items": [],
						"subsections": [{
							"__typename": "DoraFilterSubSection",
							"airmojiName": null,
							"collapseText": null,
							"descriptionText": null,
							"expandText": null,
							"filterBarTitle": null,
							"filterSectionId": "super_flexible_dates_toggle",
							"mutedText": null,
							"sectionType": null,
							"selected": true,
							"title": null,
							"items": [{
								"__typename": "DoraFilterItem",
								"airmojiName": null,
								"filterItemRule": null,
								"filterSectionId": null,
								"imageUrl": null,
								"selectedImageUrl": null,
								"key": null,
								"learnMoreLink": null,
								"linkChecked": null,
								"linkUnchecked": null,
								"metadata": {
									"__typename": "DoraFilterItemMetadata",
									"averagePrice": null,
									"dateSubtitles": null,
									"description": null,
									"hideMaxHandle": null,
									"hideMinHandle": null,
									"highlightedDescription": null,
									"intervalLabels": null,
									"intervalValue": null,
									"intervalValues": null,
									"maxValue": null,
									"minValue": null,
									"priceHistogram": null,
									"segmentedControlValues": ["calendar", "flexible_dates"],
									"segmentedControlLabels": ["Calendar", "I'm flexible"]
								},
								"onLinkChecked": null,
								"params": [{
									"__typename": "DoraFilterItemParam",
									"isSerialized": false,
									"key": "date_picker_type",
									"title": "Calendar",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "calendar"
									},
									"valueType": "string"
								}],
								"searchParams": {
									"__typename": "DoraExploreSearchParams",
									"locationSearch": null,
									"params": [{
										"__typename": "DoraSearchParam",
										"inArray": false,
										"key": "date_picker_type",
										"value": {
											"__typename": "DoraStringWrapper",
											"stringValue": "calendar"
										},
										"valueType": "string"
									}],
									"placeId": null,
									"query": null,
									"refinementPaths": [],
									"resetFilters": false,
									"resetKeys": [],
									"tabId": "all_tab"
								},
								"selected": true,
								"states": null,
								"subType": null,
								"subsectionSubtitle": null,
								"subsectionTitle": null,
								"subsectionItems": null,
								"subtitle": null,
								"subtitleChecked": null,
								"subtitleUnchecked": null,
								"title": "Calendar",
								"type": "single_segmented_control",
								"value": null
							}]
						}, {
							"__typename": "DoraFilterSubSection",
							"airmojiName": null,
							"collapseText": null,
							"descriptionText": null,
							"expandText": null,
							"filterBarTitle": null,
							"filterSectionId": "date_picker_and_flexible_days",
							"mutedText": null,
							"sectionType": null,
							"selected": true,
							"title": null,
							"items": [{
								"__typename": "DoraFilterItem",
								"airmojiName": null,
								"filterItemRule": null,
								"filterSectionId": null,
								"imageUrl": null,
								"selectedImageUrl": null,
								"key": null,
								"learnMoreLink": null,
								"linkChecked": null,
								"linkUnchecked": null,
								"metadata": null,
								"onLinkChecked": null,
								"params": [{
									"__typename": "DoraFilterItemParam",
									"isSerialized": false,
									"key": "checkin",
									"title": null,
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "2022-01-10"
									},
									"valueType": "string"
								}, {
									"__typename": "DoraFilterItemParam",
									"isSerialized": false,
									"key": "checkout",
									"title": null,
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "2022-01-13"
									},
									"valueType": "string"
								}],
								"searchParams": {
									"__typename": "DoraExploreSearchParams",
									"locationSearch": null,
									"params": [{
										"__typename": "DoraSearchParam",
										"inArray": false,
										"key": "checkin",
										"value": {
											"__typename": "DoraStringWrapper",
											"stringValue": "2022-01-10"
										},
										"valueType": "string"
									}, {
										"__typename": "DoraSearchParam",
										"inArray": false,
										"key": "checkout",
										"value": {
											"__typename": "DoraStringWrapper",
											"stringValue": "2022-01-13"
										},
										"valueType": "string"
									}],
									"placeId": null,
									"query": null,
									"refinementPaths": [],
									"resetFilters": false,
									"resetKeys": [],
									"tabId": "all_tab"
								},
								"selected": true,
								"states": null,
								"subType": null,
								"subsectionSubtitle": null,
								"subsectionTitle": null,
								"subsectionItems": null,
								"subtitle": null,
								"subtitleChecked": null,
								"subtitleUnchecked": null,
								"title": "Jan 10 – 13, 2022",
								"type": "date_picker",
								"value": null
							}, {
								"__typename": "DoraFilterItem",
								"airmojiName": null,
								"filterItemRule": {
									"__typename": "DoraFilterItemRule",
									"flexibleDateSearchRule": {
										"__typename": "DoraFlexibleDateSearchRule",
										"maxLeadTime": 180,
										"maxStayLength": 60,
										"experimentalMaxLeadTime": 180,
										"experimentalMaxStayLength": 60,
										"experimentName": "flexible_dates_search_max_lead_time_180_v2_desktop_web"
									}
								},
								"filterSectionId": null,
								"imageUrl": null,
								"selectedImageUrl": null,
								"key": null,
								"learnMoreLink": null,
								"linkChecked": null,
								"linkUnchecked": null,
								"metadata": null,
								"onLinkChecked": null,
								"params": [],
								"searchParams": null,
								"selected": false,
								"states": null,
								"subType": null,
								"subsectionSubtitle": null,
								"subsectionTitle": null,
								"subsectionItems": [{
									"__typename": "DoraFilterSection",
									"airmojiName": null,
									"collapseSelectedSubtitles": null,
									"collapseText": null,
									"collapseThreshold": null,
									"dateRangeConstraint": null,
									"descriptionText": null,
									"expandText": null,
									"experimentsMetadata": [],
									"filterBarTitle": null,
									"filterSectionId": "flexible_date_search_filter_section",
									"mutedText": null,
									"onFilterChange": null,
									"sectionType": null,
									"selected": false,
									"subtitle": null,
									"title": null,
									"items": [{
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": null,
										"selectedImageUrl": null,
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": {
											"__typename": "DoraFilterItemMetadata",
											"averagePrice": null,
											"dateSubtitles": null,
											"description": null,
											"hideMaxHandle": null,
											"hideMinHandle": null,
											"highlightedDescription": null,
											"intervalLabels": null,
											"intervalValue": null,
											"intervalValues": null,
											"maxValue": null,
											"minValue": null,
											"priceHistogram": null,
											"segmentedControlValues": null,
											"segmentedControlLabels": null
										},
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_date_search_filter_type",
											"title": "1 day",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "0"
											},
											"valueType": "integer"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": false,
												"key": "flexible_date_search_filter_type",
												"value": {
													"__typename": "DoraLongWrapper",
													"longValue": "0"
												},
												"valueType": "integer"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": false,
										"states": [],
										"subType": null,
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "1 day",
										"type": "select",
										"value": null
									}, {
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": null,
										"selectedImageUrl": null,
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": {
											"__typename": "DoraFilterItemMetadata",
											"averagePrice": null,
											"dateSubtitles": null,
											"description": null,
											"hideMaxHandle": null,
											"hideMinHandle": null,
											"highlightedDescription": null,
											"intervalLabels": null,
											"intervalValue": null,
											"intervalValues": null,
											"maxValue": null,
											"minValue": null,
											"priceHistogram": null,
											"segmentedControlValues": null,
											"segmentedControlLabels": null
										},
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_date_search_filter_type",
											"title": "3 days",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "1"
											},
											"valueType": "integer"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": false,
												"key": "flexible_date_search_filter_type",
												"value": {
													"__typename": "DoraLongWrapper",
													"longValue": "1"
												},
												"valueType": "integer"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": false,
										"states": [],
										"subType": null,
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "3 days",
										"type": "select",
										"value": null
									}, {
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": null,
										"selectedImageUrl": null,
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": {
											"__typename": "DoraFilterItemMetadata",
											"averagePrice": null,
											"dateSubtitles": null,
											"description": null,
											"hideMaxHandle": null,
											"hideMinHandle": null,
											"highlightedDescription": null,
											"intervalLabels": null,
											"intervalValue": null,
											"intervalValues": null,
											"maxValue": null,
											"minValue": null,
											"priceHistogram": null,
											"segmentedControlValues": null,
											"segmentedControlLabels": null
										},
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_date_search_filter_type",
											"title": "7 days",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "2"
											},
											"valueType": "integer"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": false,
												"key": "flexible_date_search_filter_type",
												"value": {
													"__typename": "DoraLongWrapper",
													"longValue": "2"
												},
												"valueType": "integer"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": false,
										"states": [],
										"subType": null,
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "7 days",
										"type": "select",
										"value": null
									}]
								}],
								"subtitle": null,
								"subtitleChecked": null,
								"subtitleUnchecked": null,
								"title": null,
								"type": "flexible_date_picker",
								"value": null
							}]
						}, {
							"__typename": "DoraFilterSubSection",
							"airmojiName": null,
							"collapseText": null,
							"descriptionText": null,
							"expandText": null,
							"filterBarTitle": null,
							"filterSectionId": "super_flexible_lengths_and_dates",
							"mutedText": null,
							"sectionType": null,
							"selected": true,
							"title": null,
							"items": [{
								"__typename": "DoraFilterItem",
								"airmojiName": null,
								"filterItemRule": null,
								"filterSectionId": null,
								"imageUrl": null,
								"selectedImageUrl": null,
								"key": null,
								"learnMoreLink": null,
								"linkChecked": null,
								"linkUnchecked": null,
								"metadata": null,
								"onLinkChecked": null,
								"params": [],
								"searchParams": null,
								"selected": true,
								"states": null,
								"subType": null,
								"subsectionSubtitle": null,
								"subsectionTitle": null,
								"subsectionItems": [{
									"__typename": "DoraFilterSection",
									"airmojiName": null,
									"collapseSelectedSubtitles": null,
									"collapseText": null,
									"collapseThreshold": null,
									"dateRangeConstraint": null,
									"descriptionText": null,
									"expandText": null,
									"experimentsMetadata": [],
									"filterBarTitle": null,
									"filterSectionId": "super_flexible_lengths",
									"mutedText": null,
									"onFilterChange": null,
									"sectionType": null,
									"selected": true,
									"subtitle": null,
									"title": null,
									"items": [{
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": null,
										"selectedImageUrl": null,
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": null,
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_trip_lengths",
											"title": "Weekend",
											"value": {
												"__typename": "DoraStringWrapper",
												"stringValue": "weekend_trip"
											},
											"valueType": "array"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": true,
												"key": "flexible_trip_lengths",
												"value": {
													"__typename": "DoraStringWrapper",
													"stringValue": "weekend_trip"
												},
												"valueType": "array"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": true,
										"states": [],
										"subType": "SUPER_FLEXIBLE_TRIP_LENGTH",
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "Weekend",
										"type": "single_select_pill",
										"value": null
									}, {
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": null,
										"selectedImageUrl": null,
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": null,
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_trip_lengths",
											"title": "Week",
											"value": {
												"__typename": "DoraStringWrapper",
												"stringValue": "one_week"
											},
											"valueType": "array"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": true,
												"key": "flexible_trip_lengths",
												"value": {
													"__typename": "DoraStringWrapper",
													"stringValue": "one_week"
												},
												"valueType": "array"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": false,
										"states": [],
										"subType": "SUPER_FLEXIBLE_TRIP_LENGTH",
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "Week",
										"type": "single_select_pill",
										"value": null
									}, {
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": null,
										"selectedImageUrl": null,
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": null,
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_trip_lengths",
											"title": "Month",
											"value": {
												"__typename": "DoraStringWrapper",
												"stringValue": "one_month"
											},
											"valueType": "array"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": true,
												"key": "flexible_trip_lengths",
												"value": {
													"__typename": "DoraStringWrapper",
													"stringValue": "one_month"
												},
												"valueType": "array"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": false,
										"states": [],
										"subType": "SUPER_FLEXIBLE_TRIP_LENGTH",
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "Month",
										"type": "single_select_pill",
										"value": null
									}]
								}],
								"subtitle": null,
								"subtitleChecked": null,
								"subtitleUnchecked": null,
								"title": "How long would you like to stay?",
								"type": "subcategory",
								"value": null
							}, {
								"__typename": "DoraFilterItem",
								"airmojiName": null,
								"filterItemRule": null,
								"filterSectionId": null,
								"imageUrl": null,
								"selectedImageUrl": null,
								"key": null,
								"learnMoreLink": null,
								"linkChecked": null,
								"linkUnchecked": null,
								"metadata": null,
								"onLinkChecked": null,
								"params": [],
								"searchParams": null,
								"selected": true,
								"states": null,
								"subType": null,
								"subsectionSubtitle": null,
								"subsectionTitle": null,
								"subsectionItems": [{
									"__typename": "DoraFilterSection",
									"airmojiName": null,
									"collapseSelectedSubtitles": null,
									"collapseText": null,
									"collapseThreshold": null,
									"dateRangeConstraint": null,
									"descriptionText": null,
									"expandText": null,
									"experimentsMetadata": [],
									"filterBarTitle": null,
									"filterSectionId": "super_flexible_dates",
									"mutedText": null,
									"onFilterChange": null,
									"sectionType": null,
									"selected": true,
									"subtitle": null,
									"title": null,
									"items": [{
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg",
										"selectedImageUrl": "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg",
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": null,
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_trip_dates",
											"title": "September",
											"value": {
												"__typename": "DoraStringWrapper",
												"stringValue": "september"
											},
											"valueType": "array"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": true,
												"key": "flexible_trip_dates",
												"value": {
													"__typename": "DoraStringWrapper",
													"stringValue": "september"
												},
												"valueType": "array"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": true,
										"states": [],
										"subType": "SUPER_FLEXIBLE_TRIP_DATES",
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "September",
										"type": "pill_checkbox_with_image",
										"value": null
									}, {
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg",
										"selectedImageUrl": "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg",
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": null,
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_trip_dates",
											"title": "October",
											"value": {
												"__typename": "DoraStringWrapper",
												"stringValue": "october"
											},
											"valueType": "array"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": true,
												"key": "flexible_trip_dates",
												"value": {
													"__typename": "DoraStringWrapper",
													"stringValue": "october"
												},
												"valueType": "array"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": true,
										"states": [],
										"subType": "SUPER_FLEXIBLE_TRIP_DATES",
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "October",
										"type": "pill_checkbox_with_image",
										"value": null
									}, {
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg",
										"selectedImageUrl": "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg",
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": null,
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_trip_dates",
											"title": "November",
											"value": {
												"__typename": "DoraStringWrapper",
												"stringValue": "november"
											},
											"valueType": "array"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": true,
												"key": "flexible_trip_dates",
												"value": {
													"__typename": "DoraStringWrapper",
													"stringValue": "november"
												},
												"valueType": "array"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": false,
										"states": [],
										"subType": "SUPER_FLEXIBLE_TRIP_DATES",
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "November",
										"type": "pill_checkbox_with_image",
										"value": null
									}, {
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg",
										"selectedImageUrl": "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg",
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": null,
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_trip_dates",
											"title": "December",
											"value": {
												"__typename": "DoraStringWrapper",
												"stringValue": "december"
											},
											"valueType": "array"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": true,
												"key": "flexible_trip_dates",
												"value": {
													"__typename": "DoraStringWrapper",
													"stringValue": "december"
												},
												"valueType": "array"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": false,
										"states": [],
										"subType": "SUPER_FLEXIBLE_TRIP_DATES",
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "December",
										"type": "pill_checkbox_with_image",
										"value": null
									}, {
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg",
										"selectedImageUrl": "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg",
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": null,
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_trip_dates",
											"title": "January",
											"value": {
												"__typename": "DoraStringWrapper",
												"stringValue": "january"
											},
											"valueType": "array"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": true,
												"key": "flexible_trip_dates",
												"value": {
													"__typename": "DoraStringWrapper",
													"stringValue": "january"
												},
												"valueType": "array"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": false,
										"states": [],
										"subType": "SUPER_FLEXIBLE_TRIP_DATES",
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "January",
										"type": "pill_checkbox_with_image",
										"value": null
									}, {
										"__typename": "DoraFilterItem",
										"airmojiName": null,
										"filterItemRule": null,
										"filterSectionId": null,
										"imageUrl": "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg",
										"selectedImageUrl": "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg",
										"key": null,
										"learnMoreLink": null,
										"linkChecked": null,
										"linkUnchecked": null,
										"metadata": null,
										"onLinkChecked": null,
										"params": [{
											"__typename": "DoraFilterItemParam",
											"isSerialized": false,
											"key": "flexible_trip_dates",
											"title": "February",
											"value": {
												"__typename": "DoraStringWrapper",
												"stringValue": "february"
											},
											"valueType": "array"
										}],
										"searchParams": {
											"__typename": "DoraExploreSearchParams",
											"locationSearch": null,
											"params": [{
												"__typename": "DoraSearchParam",
												"inArray": true,
												"key": "flexible_trip_dates",
												"value": {
													"__typename": "DoraStringWrapper",
													"stringValue": "february"
												},
												"valueType": "array"
											}],
											"placeId": null,
											"query": null,
											"refinementPaths": [],
											"resetFilters": false,
											"resetKeys": [],
											"tabId": "all_tab"
										},
										"selected": false,
										"states": [],
										"subType": "SUPER_FLEXIBLE_TRIP_DATES",
										"subsectionSubtitle": null,
										"subsectionTitle": null,
										"subtitle": null,
										"subtitleChecked": null,
										"subtitleUnchecked": null,
										"title": "February",
										"type": "pill_checkbox_with_image",
										"value": null
									}]
								}],
								"subtitle": null,
								"subtitleChecked": null,
								"subtitleUnchecked": null,
								"title": "When do you want to go?",
								"type": "subcategory",
								"value": null
							}]
						}]
					}, {
						"__typename": "DoraFilterSection",
						"airmojiName": null,
						"collapseSelectedSubtitles": null,
						"collapseText": null,
						"collapseThreshold": null,
						"dateRangeConstraint": null,
						"descriptionText": null,
						"expandText": null,
						"experimentsMetadata": [],
						"filterBarTitle": "Jan 10 – 13, 2022",
						"filterSectionId": "monthly_stays_date_picker",
						"mutedText": null,
						"onFilterChange": null,
						"sectionType": null,
						"selected": true,
						"subtitle": null,
						"title": "Add dates",
						"items": [{
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": null,
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [{
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "checkin",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "2022-01-10"
								},
								"valueType": "string"
							}, {
								"__typename": "DoraFilterItemParam",
								"isSerialized": false,
								"key": "checkout",
								"title": null,
								"value": {
									"__typename": "DoraStringWrapper",
									"stringValue": "2022-01-13"
								},
								"valueType": "string"
							}],
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "checkin",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "2022-01-10"
									},
									"valueType": "string"
								}, {
									"__typename": "DoraSearchParam",
									"inArray": false,
									"key": "checkout",
									"value": {
										"__typename": "DoraStringWrapper",
										"stringValue": "2022-01-13"
									},
									"valueType": "string"
								}],
								"placeId": null,
								"query": null,
								"refinementPaths": [],
								"resetFilters": false,
								"resetKeys": [],
								"tabId": "all_tab"
							},
							"selected": true,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": null,
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": "Jan 10 – 13, 2022",
							"type": "date_picker",
							"value": null
						}, {
							"__typename": "DoraFilterItem",
							"airmojiName": null,
							"filterItemRule": {
								"__typename": "DoraFilterItemRule",
								"flexibleDateSearchRule": {
									"__typename": "DoraFlexibleDateSearchRule",
									"maxLeadTime": 180,
									"maxStayLength": 60,
									"experimentalMaxLeadTime": 180,
									"experimentalMaxStayLength": 60,
									"experimentName": "flexible_dates_search_max_lead_time_180_v2_desktop_web"
								}
							},
							"filterSectionId": null,
							"imageUrl": null,
							"selectedImageUrl": null,
							"key": null,
							"learnMoreLink": null,
							"linkChecked": null,
							"linkUnchecked": null,
							"metadata": null,
							"onLinkChecked": null,
							"params": [],
							"searchParams": null,
							"selected": false,
							"states": null,
							"subType": null,
							"subsectionSubtitle": null,
							"subsectionTitle": null,
							"subsectionItems": [{
								"__typename": "DoraFilterSection",
								"airmojiName": null,
								"collapseSelectedSubtitles": null,
								"collapseText": null,
								"collapseThreshold": null,
								"dateRangeConstraint": null,
								"descriptionText": null,
								"expandText": null,
								"experimentsMetadata": [],
								"filterBarTitle": null,
								"filterSectionId": "flexible_date_search_filter_section",
								"mutedText": null,
								"onFilterChange": null,
								"sectionType": null,
								"selected": false,
								"subtitle": null,
								"title": null,
								"items": [{
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": {
										"__typename": "DoraFilterItemMetadata",
										"averagePrice": null,
										"dateSubtitles": null,
										"description": null,
										"hideMaxHandle": null,
										"hideMinHandle": null,
										"highlightedDescription": null,
										"intervalLabels": null,
										"intervalValue": null,
										"intervalValues": null,
										"maxValue": null,
										"minValue": null,
										"priceHistogram": null,
										"segmentedControlValues": null,
										"segmentedControlLabels": null
									},
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "flexible_date_search_filter_type",
										"title": "1 day",
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "0"
										},
										"valueType": "integer"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": false,
											"key": "flexible_date_search_filter_type",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "0"
											},
											"valueType": "integer"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": null,
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "1 day",
									"type": "select",
									"value": null,
									"subsectionItems": null
								}, {
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": {
										"__typename": "DoraFilterItemMetadata",
										"averagePrice": null,
										"dateSubtitles": null,
										"description": null,
										"hideMaxHandle": null,
										"hideMinHandle": null,
										"highlightedDescription": null,
										"intervalLabels": null,
										"intervalValue": null,
										"intervalValues": null,
										"maxValue": null,
										"minValue": null,
										"priceHistogram": null,
										"segmentedControlValues": null,
										"segmentedControlLabels": null
									},
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "flexible_date_search_filter_type",
										"title": "3 days",
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "1"
										},
										"valueType": "integer"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": false,
											"key": "flexible_date_search_filter_type",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "1"
											},
											"valueType": "integer"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": null,
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "3 days",
									"type": "select",
									"value": null,
									"subsectionItems": null
								}, {
									"__typename": "DoraFilterItem",
									"airmojiName": null,
									"filterItemRule": null,
									"filterSectionId": null,
									"imageUrl": null,
									"selectedImageUrl": null,
									"key": null,
									"learnMoreLink": null,
									"linkChecked": null,
									"linkUnchecked": null,
									"metadata": {
										"__typename": "DoraFilterItemMetadata",
										"averagePrice": null,
										"dateSubtitles": null,
										"description": null,
										"hideMaxHandle": null,
										"hideMinHandle": null,
										"highlightedDescription": null,
										"intervalLabels": null,
										"intervalValue": null,
										"intervalValues": null,
										"maxValue": null,
										"minValue": null,
										"priceHistogram": null,
										"segmentedControlValues": null,
										"segmentedControlLabels": null
									},
									"onLinkChecked": null,
									"params": [{
										"__typename": "DoraFilterItemParam",
										"isSerialized": false,
										"key": "flexible_date_search_filter_type",
										"title": "7 days",
										"value": {
											"__typename": "DoraLongWrapper",
											"longValue": "2"
										},
										"valueType": "integer"
									}],
									"searchParams": {
										"__typename": "DoraExploreSearchParams",
										"locationSearch": null,
										"params": [{
											"__typename": "DoraSearchParam",
											"inArray": false,
											"key": "flexible_date_search_filter_type",
											"value": {
												"__typename": "DoraLongWrapper",
												"longValue": "2"
											},
											"valueType": "integer"
										}],
										"placeId": null,
										"query": null,
										"refinementPaths": [],
										"resetFilters": false,
										"resetKeys": [],
										"tabId": "all_tab"
									},
									"selected": false,
									"states": [],
									"subType": null,
									"subsectionSubtitle": null,
									"subsectionTitle": null,
									"subtitle": null,
									"subtitleChecked": null,
									"subtitleUnchecked": null,
									"title": "7 days",
									"type": "select",
									"value": null,
									"subsectionItems": null
								}]
							}],
							"subtitle": null,
							"subtitleChecked": null,
							"subtitleUnchecked": null,
							"title": null,
							"type": "flexible_date_picker",
							"value": null
						}],
						"subsections": []
					}],
					"filterStateSerializationContexts": [],
					"moreFiltersButton": {
						"__typename": "DoraMoreFiltersButton",
						"text": "Show 300+ stays",
						"verified": false,
						"bgColor": "#008489"
					},
					"filterBarOrdering": {
						"__typename": "DoraFilterBarOrdering",
						"default": ["flexible_cancellation", "room_type", "price_range", "instant_book"],
						"small": [],
						"medium": ["flexible_cancellation", "room_type", "price_range", "rooms_and_beds"]
					},
					"secondaryFilterBarOrdering": null,
					"moreFiltersOrdering": {
						"__typename": "DoraFilterBarOrdering",
						"default": ["more_filters_experiment_assignment", "rooms_and_beds", "listing_tier", "work_trip", "host_promotion_type", "other_options", "amenities", "facilities", "property_types", "unique_homes", "house_rules", "family_trip", "host_language"],
						"small": ["more_filters_experiment_assignment", "room_type", "listing_tier", "instant_book", "price_range", "review_score", "rooms_and_beds", "flexible_cancellation", "work_trip", "host_promotion_type", "other_options", "amenities", "facilities", "property_types", "unique_homes", "house_rules", "family_trip", "host_language"],
						"medium": ["more_filters_experiment_assignment", "work_trip", "listing_tier", "instant_book", "host_promotion_type", "other_options", "amenities", "facilities", "property_types", "unique_homes", "house_rules", "family_trip", "host_language"]
					},
					"allFiltersOrdering": ["room_type", "listing_tier", "instant_book", "price_range", "review_score", "rooms_and_beds", "flexible_cancellation", "work_trip", "host_promotion_type", "other_options", "amenities", "facilities", "property_types", "unique_homes", "house_rules", "family_trip", "host_language"],
					"allFiltersCount": 1,
					"moreFiltersCounts": {
						"__typename": "DoraMoreFiltersCounts",
						"default": 1,
						"medium": 1,
						"small": 1
					},
					"filterBarCounts": {
						"__typename": "DoraFilterBarCounts",
						"default": [0, 0, 0, 0],
						"medium": [0, 0, 0, 0],
						"small": []
					},
					"secondaryFilterBarCounts": null,
					"filterBar": null,
					"filterBarMoreFiltersButton": null
				},
				"queryInput": {
					"__typename": "DoraExploreV3QueryInput",
					"query": "Florianópolis - SC",
					"queryText": "Florianópolis · Stays",
					"showAsHint": false,
					"suggestions": [],
					"autosuggestionsResponse": null
				},
				"metadata": {
					"__typename": "DoraExploreV3Metadata",
					"autocompleteVertical": "homes",
					"currentRefinementPaths": ["/homes"],
					"currentTabId": "home_tab",
					"location": {
						"__typename": "DoraLocation",
						"canonicalLocation": "Florianópolis, Brazil",
						"locationContext": {
							"__typename": "DoraLocationContext",
							"pois": null
						}
					},
					"geography": {
						"__typename": "DoraGeography",
						"city": "Florianópolis",
						"country": "Brazil",
						"fullAddress": "Florianópolis, State of Santa Catarina, Brazil",
						"geoJsonShape": null,
						"lat": -27.5948036,
						"lng": -48.5569286,
						"placeId": "ChIJ1zLGsk45J5URRscEagtVvIE",
						"precision": "city",
						"resultType": "locality",
						"showPoi": false,
						"showShape": false,
						"state": "State of Santa Catarina"
					},
					"pageMetadata": {
						"__typename": "DoraPageMetadata",
						"androidAlternateUrl": "android-app://com.airbnb.android/airbnb/search",
						"androidDeeplink": "airbnb://d/search",
						"canonicalUrl": "/s/Florianópolis--Brazil",
						"iphoneDeeplink": "airbnb://d/search",
						"locationQuery": false,
						"pageDescription": "Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb.",
						"pageTitle": "Florianópolis · Stays · Airbnb",
						"ogTags": {
							"__typename": "DoraOgTags",
							"ogDescription": "Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb.",
							"ogImage": "",
							"ogTitle": "Florianópolis · Stays · Airbnb",
							"ogType": "website",
							"ogUrl": "/s/Florianópolis--Brazil"
						},
						"twitterTags": {
							"__typename": "DoraTwitterTags",
							"twitterCard": "summary_large_image",
							"twitterDescription": "Find vacation rentals, cabins, beach houses, unique homes and experiences around the world - all made possible by hosts on Airbnb.",
							"twitterImage": "",
							"twitterTitle": "Florianópolis · Stays · Airbnb",
							"twitterUrl": "/s/Florianópolis--Brazil"
						}
					},
					"paginationMetadata": {
						"__typename": "DoraExploreV3PaginationMetadata",
						"hasNextPage": true,
						"itemsOffset": 20,
						"sectionOffset": 4,
						"hasPreviousPage": false,
						"previousPageSectionOffset": null,
						"previousPageItemsOffset": null,
						"searchSessionId": "1068efa3-cc63-4524-a8e7-93595df8a407",
						"pageLimit": 20,
						"totalCount": "1001"
					},
					"loggingContext": {
						"__typename": "DoraExploreV3LoggingContext",
						"federatedSearchId": "631dc911-ab4f-4dcc-af63-592b24ede10e",
						"federatedSearchSessionId": "c8592d55-57f6-45b7-bdbf-4567919629d2",
						"pageLoggingContext": {
							"__typename": "DoraPageLoggingContext",
							"pageType": "SEARCH",
							"pageVertical": "STAYS",
							"pageCategory": null,
							"extraData": null
						}
					},
					"priceDisplayStrategy": "SHOW_PER_NIGHT_PRICE_WITHOUT_CLEANING_AND_TOTAL_PRICE",
					"marqueeMode": "DEFAULT",
					"remarketingData": {
						"__typename": "DoraExploreV3RemarketingData",
						"remarketingIds": ["30576782", "32910080", "21694662", "27133426", "2464426", "41585397", "23051855", "39336316", "22100450", "10964658", "22611193", "21419952"]
					}
				},
				"sections": [{
					"__typename": "DoraExploreV3MessagesSection",
					"loggingContext": {
						"__typename": "DoraExploreV3SectionLoggingContext",
						"backendSearchId": "69336ef1-8540-4a18-9f56-060cd6d6d5e7",
						"bankaiSectionId": "91",
						"searchSessionId": "9bd8ad1f-df17-48e8-8e20-e2fec5bcdbda",
						"sectionId": "9bd8ad1f-df17-48e8-8e20-e2fec5bcdbda",
						"sectionIndex": "0",
						"sectionLoggingId": null,
						"sectionTypeUid": "HOMES_MARKET_LEVEL_MESSAGE"
					},
					"resultTypeDeprecated": "messages",
					"sectionComponentType": "messages_StackedMessageWithIcon",
					"sectionComponentTypeV2": "MESSAGE_STACKED_WITH_ICON",
					"sectionMetadata": {
						"__typename": "DoraSectionMetadata",
						"campaignName": null,
						"cardLayout": null,
						"carouselItemSize": null,
						"defaultActiveGroupId": null,
						"destinationPlaceId": null,
						"isMimickingPaginated": false,
						"marqueeDuration": null,
						"pollingInfo": null,
						"reflectImageForRtl": false,
						"seeAllButtonOutlineColor": null,
						"seeAllButtonTextColor": null,
						"seeAllLinkTextColor": null,
						"shouldHideItemsFromMap": false
					},
					"experimentsMetadata": [],
					"title": null,
					"subtitle": null,
					"seeAllInfo": null,
					"sectionActions": [],
					"items": [{
						"__typename": "DoraMessageItem",
						"ctaButtonText": "Learn more",
						"ctaType": "static_link",
						"ctaUrl": "/help/topic/1418/government-travel-restrictions-and-advisories",
						"icon": null,
						"iconEnum": null,
						"searchParams": null,
						"style": "MESSAGE_WITH_ICON",
						"subtitle": "Review COVID-19 travel restrictions before you book.",
						"title": "",
						"expandedState": null
					}]
				}, {
					"__typename": "DoraExploreV3InsertsSection",
					"loggingContext": {
						"__typename": "DoraExploreV3SectionLoggingContext",
						"backendSearchId": "69336ef1-8540-4a18-9f56-060cd6d6d5e7",
						"bankaiSectionId": "298",
						"searchSessionId": "184ac1c3-bf28-4740-b98a-0fa1be7dfa1b",
						"sectionId": "184ac1c3-bf28-4740-b98a-0fa1be7dfa1b",
						"sectionIndex": "1",
						"sectionLoggingId": null,
						"sectionTypeUid": "AUTO_TRANSLATION_BUTTON_AND_TOOLTIP"
					},
					"resultTypeDeprecated": "inserts",
					"sectionComponentType": "inserts_Default",
					"sectionComponentTypeV2": "INSERTS_BUTTON_AND_TOOLTIP",
					"sectionMetadata": {
						"__typename": "DoraSectionMetadata",
						"campaignName": null,
						"cardLayout": null,
						"carouselItemSize": null,
						"defaultActiveGroupId": null,
						"destinationPlaceId": null,
						"isMimickingPaginated": false,
						"marqueeDuration": null,
						"pollingInfo": null,
						"reflectImageForRtl": false,
						"seeAllButtonOutlineColor": null,
						"seeAllButtonTextColor": null,
						"seeAllLinkTextColor": null,
						"shouldHideItemsFromMap": false
					},
					"experimentsMetadata": [],
					"title": null,
					"subtitle": null,
					"seeAllInfo": null,
					"sectionActions": [],
					"items": [{
						"__typename": "DoraInsertItem",
						"smallImage": null,
						"mediumImage": null,
						"largeImage": null,
						"alertSeverity": null,
						"title": null,
						"subtitle": null,
						"icon": null,
						"kickerText": null,
						"ctaText": null,
						"ctaUrl": null,
						"logoName": null,
						"style": "BUTTON_AND_TOOLTIP",
						"titleTextBoldRange": null,
						"breakpointConfigStruct": {
							"__typename": "DoraBreakpointConfigStruct",
							"default": {
								"__typename": "DoraBreakpointConfig",
								"ctaTextColor": "#484848",
								"kickerTextColor": "#484848",
								"logoColor": "#484848",
								"subtitleTextColor": "#484848",
								"titleTextColor": "#484848"
							},
							"small": {
								"__typename": "DoraBreakpointConfig",
								"ctaTextColor": "#484848",
								"kickerTextColor": "#484848",
								"logoColor": "#484848",
								"subtitleTextColor": "#484848",
								"titleTextColor": "#484848"
							},
							"medium": null,
							"large": {
								"__typename": "DoraBreakpointConfig",
								"ctaTextColor": "#484848",
								"kickerTextColor": "#484848",
								"logoColor": "#484848",
								"subtitleTextColor": "#484848",
								"titleTextColor": "#484848"
							}
						},
						"searchParams": {
							"__typename": "DoraExploreSearchParams",
							"locationSearch": null,
							"params": [],
							"placeId": null,
							"query": null,
							"refinementPaths": [],
							"resetFilters": false,
							"resetKeys": [],
							"tabId": "all_tab"
						},
						"messageType": null,
						"ctaDataList": [],
						"interactiveMessageModalData": null,
						"sectionOptionToggle": {
							"__typename": "DoraSectionOptionToggle",
							"title": "Show original language",
							"icon": "COMPACT_TRANSLATE",
							"searchParams": {
								"__typename": "DoraExploreSearchParams",
								"locationSearch": null,
								"params": [{
									"__typename": "DoraSearchParam",
									"inArray": null,
									"key": "disable_auto_translation",
									"value": {
										"__typename": "DoraBooleanWrapper",
										"booleanValue": true
									},
									"valueType": null
								}],
								"placeId": "ChIJ1zLGsk45J5URRscEagtVvIE",
								"query": "Florianópolis - SC",
								"refinementPaths": ["/homes"],
								"resetFilters": false,
								"resetKeys": null,
								"tabId": null
							},
							"message": {
								"__typename": "DoraSectionOptionToggleMessage",
								"title": null,
								"subtitle": "Some listings have automatically been translated.",
								"icon": "TRANSLATION_COLORED",
								"autoDismissTimeMilliseconds": 5000
							},
							"isChecked": true
						}
					}]
				}, {
					"__typename": "DoraExploreV3ListingsSection",
					"loggingContext": {
						"__typename": "DoraExploreV3SectionLoggingContext",
						"backendSearchId": "5820dceb-e762-4bf1-88a9-29302c7afd5e",
						"bankaiSectionId": "76",
						"searchSessionId": "1068efa3-cc63-4524-a8e7-93595df8a407",
						"sectionId": "1068efa3-cc63-4524-a8e7-93595df8a407",
						"sectionIndex": "2",
						"sectionLoggingId": null,
						"sectionTypeUid": "PAGINATED_HOMES"
					},
					"resultTypeDeprecated": "listings",
					"sectionComponentType": "listings_ListingsGrid_Explore",
					"sectionComponentTypeV2": "LISTINGS_GRID",
					"sectionMetadata": {
						"__typename": "DoraSectionMetadata",
						"campaignName": null,
						"cardLayout": "BINGO_HORIZONTAL",
						"carouselItemSize": null,
						"defaultActiveGroupId": null,
						"destinationPlaceId": null,
						"isMimickingPaginated": false,
						"marqueeDuration": null,
						"pollingInfo": null,
						"reflectImageForRtl": false,
						"seeAllButtonOutlineColor": "#000000",
						"seeAllButtonTextColor": "#000000",
						"seeAllLinkTextColor": "#000000",
						"shouldHideItemsFromMap": false
					},
					"experimentsMetadata": [],
					"title": null,
					"subtitle": null,
					"seeAllInfo": null,
					"sectionActions": [],
					"backgroundDisplayOptions": {
						"__typename": "DoraBackgroundDisplayOptions",
						"backgroundColor": null
					},
					"displayType": "grid",
					"isPaginated": true,
					"items": [{
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 4.91,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "416125165",
								"picture": "https://a0.muscache.com/im/pictures/eff775b6-b068-4b34-ab27-e4dbb0e85a24.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["3 beds", "1 bedroom"]
								},
								"id": "1151238252",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-22017604/original/16aae83f-adfb-43bb-811d-618d8b597670.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 baths"]
								},
								"id": "1040993822",
								"picture": "https://a0.muscache.com/im/pictures/b40b3e43-68dc-4691-95d2-ddc6ae3b28a8.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 queen bed", "2 single beds", "more"]
								},
								"id": "1086037898",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-22017604/original/4341bb19-bd7a-46af-8718-5b605c51bc04.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Kitchen"]
								},
								"id": "1053709171",
								"picture": "https://a0.muscache.com/im/pictures/b259ac36-4b4d-4e64-b6d9-3319524d46a8.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 4.8 out of 5 for cleanliness"]
								},
								"id": "629331949",
								"picture": "https://a0.muscache.com/im/pictures/be55fe4b-4763-4ba1-941d-6251c05d87ea.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "4 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bedroom"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "3 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 baths"
							}],
							"id": "22017604",
							"isAutoTranslated": false,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Earth house in Florianópolis"],
								"textColor": null
							},
							"lat": -27.55226,
							"listingObjType": "REGULAR",
							"lng": -48.46208,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "MorphoAzul, Vista Exuberante para a Lagoa e o Mar",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Earth house"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Florianópolis"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 4,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Kitchen"],
							"relaxedFilterLabels": null,
							"reviewsCount": 162,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": null
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.8,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$350 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1050.0,
										"amountFormatted": "R$1,050",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 100.0,
										"amountFormatted": "R$100",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 162.0,
										"amountFormatted": "R$162",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1312.0,
									"amountFormatted": "R$1,312",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$404",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 404.0,
								"amountFormatted": "R$404",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 404.0,
								"amountFormatted": "R$404",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.9,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$404 per night",
									"price": "R$404",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,312 total",
									"price": "R$1,312 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$350 x 3 nights",
											"priceString": "R$1,050",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$100",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$162",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 5.0,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1154339683",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-48366316/original/7e7315c9-d2d8-4c3a-94d8-56c01415d447.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 beds", "1 bedroom"]
								},
								"id": "1147791672",
								"picture": "https://a0.muscache.com/im/pictures/c59222a5-d9be-4549-afc9-18901a972df5.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "1147791968",
								"picture": "https://a0.muscache.com/im/pictures/cc2a86d3-15f5-4d4b-bcee-9cf76a0193b3.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 queen bed", "1 sofa bed"]
								},
								"id": "1147791842",
								"picture": "https://a0.muscache.com/im/pictures/3c6b225e-bbea-4fd0-888d-2e38e21c329d.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Kitchen"]
								},
								"id": "1147791829",
								"picture": "https://a0.muscache.com/im/pictures/e684a46e-62d8-400a-a3c0-519c74c7a2e3.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 5 out of 5 for cleanliness"]
								},
								"id": "1147791804",
								"picture": "https://a0.muscache.com/im/pictures/3369e059-fa70-45f6-90fd-c3825e85041e.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "4 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bedroom"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "48366316",
							"isAutoTranslated": false,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Earth house in Lagoa da Conceição"],
								"textColor": null
							},
							"lat": -27.58482,
							"listingObjType": "REGULAR",
							"lng": -48.46025,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "Casa Engenho, na beira da Lagoa, Florianópolis",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Earth house"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Lagoa da Conceição"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 4,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Kitchen"],
							"relaxedFilterLabels": null,
							"reviewsCount": 21,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": null
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.8,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$400 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1200.0,
										"amountFormatted": "R$1,200",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 100.0,
										"amountFormatted": "R$100",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 184.0,
										"amountFormatted": "R$184",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1484.0,
									"amountFormatted": "R$1,484",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$461",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 461.0,
								"amountFormatted": "R$461",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 461.0,
								"amountFormatted": "R$461",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.9,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$461 per night",
									"price": "R$461",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,484 total",
									"price": "R$1,484 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$400 x 3 nights",
											"priceString": "R$1,200",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$100",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$184",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 4.94,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "997317055",
								"picture": "https://a0.muscache.com/im/pictures/feaecadc-5197-4106-a91b-ce037c12df3b.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["4 beds", "1 bedroom"]
								},
								"id": "995468939",
								"picture": "https://a0.muscache.com/im/pictures/ac187677-cb7a-4b77-aadf-af15aaad1589.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "136161653",
								"picture": "https://a0.muscache.com/im/pictures/10a160ed-3981-491d-8c1d-cbaea730ed7d.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 double beds", "2 single beds"]
								},
								"id": "209391755",
								"picture": "https://a0.muscache.com/im/pictures/7f1d5646-5b29-4fb7-b39e-2b33153f0f55.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "229227427",
								"picture": "https://a0.muscache.com/im/pictures/5936cb26-752c-4a23-9eaa-66c6cbe44c1f.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 4.9 out of 5 for cleanliness"]
								},
								"id": "136161570",
								"picture": "https://a0.muscache.com/im/pictures/33c16528-d667-4cc4-b796-5ed5c0c6b80b.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "2 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bedroom"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "4 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "12009202",
							"isAutoTranslated": false,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire guesthouse in Florianópolis"],
								"textColor": null
							},
							"lat": -27.71744,
							"listingObjType": "REGULAR",
							"lng": -48.56412,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "CASA  PEQUENA**Centro Histórico**Ribeirão da ilha",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire guesthouse"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Florianópolis"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 2,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 161,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": null
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.9,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$200 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 600.0,
										"amountFormatted": "R$600",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 100.0,
										"amountFormatted": "R$100",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 99.0,
										"amountFormatted": "R$99",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 799.0,
									"amountFormatted": "R$799",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$233",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 233.0,
								"amountFormatted": "R$233",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 233.0,
								"amountFormatted": "R$233",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.95,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$233 per night",
									"price": "R$233",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$799 total",
									"price": "R$799 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$200 x 3 nights",
											"priceString": "R$600",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$100",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$99",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 4.99,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "229509323",
								"picture": "https://a0.muscache.com/im/pictures/fbcc01df-a5f1-4f74-9052-0138a3a547b0.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["3 beds", "1 bedroom"]
								},
								"id": "229539493",
								"picture": "https://a0.muscache.com/im/pictures/f4b067f2-03fc-48e9-8d97-1ecc11f95b1d.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "229537543",
								"picture": "https://a0.muscache.com/im/pictures/ab6a0829-40e9-4525-b195-68a0ea1243f0.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 double beds", "1 single bed"]
								},
								"id": "937165673",
								"picture": "https://a0.muscache.com/im/pictures/9559d466-0f5c-44fe-bbe9-591b743b4e89.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "937207577",
								"picture": "https://a0.muscache.com/im/pictures/83acefbc-b8a8-46f0-b056-bf2992b21f05.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 5 out of 5 for cleanliness"]
								},
								"id": "937222998",
								"picture": "https://a0.muscache.com/im/pictures/05bab058-7913-4a30-9820-7168857005d8.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "4 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bedroom"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "3 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "10964658",
							"isAutoTranslated": false,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire residential home in Florianópolis"],
								"textColor": null
							},
							"lat": -27.76592,
							"listingObjType": "REGULAR",
							"lng": -48.57241,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "HOUSE ON THE MOUNTAIN WITH BEAUTIFUL OCEAN VIEW",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire residential home"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Florianópolis"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 4,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 126,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": null
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.0,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$360 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1080.0,
										"amountFormatted": "R$1,080",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 200.0,
										"amountFormatted": "R$200",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 181.0,
										"amountFormatted": "R$181",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1461.0,
									"amountFormatted": "R$1,461",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$420",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 420.0,
								"amountFormatted": "R$420",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 420.0,
								"amountFormatted": "R$420",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.0,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$420 per night",
									"price": "R$420",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,461 total",
									"price": "R$1,461 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$360 x 3 nights",
											"priceString": "R$1,080",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$200",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$181",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": null,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1215937881",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50170620/original/bf61f42b-a4b7-4c24-a695-77ebd0c0bdb9.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Studio"]
								},
								"id": "1216456937",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50170620/original/d7a162b0-0dea-4c72-a4f9-1d5f46821dcd.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "1215938183",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50170620/original/7b8ab65e-acde-4b22-b089-f253b811001f.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 double bed", "1 couch"]
								},
								"id": "1216456945",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50170620/original/67328a75-7cdb-4ccf-897c-64e938116146.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "1215936980",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50170620/original/4a7ef895-3048-4149-ba33-c085d5b384f8.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1215938163",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50170620/original/3df4f8f7-b201-43a3-9a57-862e3e415823.jpeg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "2 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Studio"
							}, {
								"__typename": "DoraBasicListItem",
								"title": ""
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "50170620",
							"isAutoTranslated": true,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire rental unit in Córrego Grande"],
								"textColor": null
							},
							"lat": -27.60164,
							"listingObjType": "REGULAR",
							"lng": -48.50342,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": {
								"__typename": "DoraMainSectionMessage",
								"body": "This place is usually booked.",
								"bodyType": null,
								"headline": "Rare find",
								"iconType": null,
								"type": "occupancy_rate"
							},
							"mainSectionMessages": [{
								"__typename": "DoraMainSectionMessage",
								"body": "This place is usually booked.",
								"bodyType": null,
								"headline": "Rare find",
								"iconType": null,
								"type": "occupancy_rate"
							}],
							"name": "roomin #20 | Sappphire | Sophisticated STD",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire rental unit"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Córrego Grande"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 2,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 1,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": "COMPACT_TRANSLATE"
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.7,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": "Includes extra guest fees.",
									"localizedTitle": "R$277 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 831.0,
										"amountFormatted": "R$831",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 100.0,
										"amountFormatted": "R$100",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "The service fee, which the host has decided to pay, helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 0.0,
										"amountFormatted": "R$0",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 931.0,
									"amountFormatted": "R$931",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$277",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 277.0,
								"amountFormatted": "R$277",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 277.0,
								"amountFormatted": "R$277",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.0,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$277 per night",
									"price": "R$277",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$931 total",
									"price": "R$931 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$277 x 3 nights",
											"priceString": "R$831",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$100",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$0",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 5.0,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1190596523",
								"picture": "https://a0.muscache.com/im/pictures/43762de1-f09e-4fa3-befb-aab144f33787.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bed", "1 bedroom"]
								},
								"id": "1180542255",
								"picture": "https://a0.muscache.com/im/pictures/9abbaa1b-f760-4d65-91ec-265443e4508c.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1.5 baths"]
								},
								"id": "1185007413",
								"picture": "https://a0.muscache.com/im/pictures/a419fd8a-8dc3-47eb-847d-82d838e2d00f.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 king bed"]
								},
								"id": "1231925274",
								"picture": "https://a0.muscache.com/im/pictures/2871f4c2-e2a0-4a92-a2ed-7193d61d8a1a.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen"]
								},
								"id": "1221591791",
								"picture": "https://a0.muscache.com/im/pictures/11274f12-ee1d-428e-889c-c8bae296150c.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 5 out of 5 for cleanliness"]
								},
								"id": "1171609813",
								"picture": "https://a0.muscache.com/im/pictures/443eb92e-0da6-4322-a758-8ae3f0e0e456.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "2 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bedroom"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bed"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1.5 baths"
							}],
							"id": "41880332",
							"isAutoTranslated": true,
							"isNewListing": false,
							"isSuperhost": false,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire chalet in Palhoça"],
								"textColor": null
							},
							"lat": -27.79212,
							"listingObjType": "REGULAR",
							"lng": -48.61579,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "Seafront loft with private 💕🍷🏄beach.",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire chalet"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Palhoça"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 2,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen"],
							"relaxedFilterLabels": null,
							"reviewsCount": 3,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": "COMPACT_TRANSLATE"
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": false,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.51,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$450 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1350.0,
										"amountFormatted": "R$1,350",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 100.0,
										"amountFormatted": "R$100",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 205.0,
										"amountFormatted": "R$205",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1655.0,
									"amountFormatted": "R$1,655",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$518",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 518.0,
								"amountFormatted": "R$518",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 518.0,
								"amountFormatted": "R$518",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.9,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$518 per night",
									"price": "R$518",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,655 total",
									"price": "R$1,655 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$450 x 3 nights",
											"priceString": "R$1,350",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$100",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$205",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 5.0,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "670592669",
								"picture": "https://a0.muscache.com/im/pictures/a05580e0-f4e2-446c-807a-05f6e82fd3a0.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bed", "1 bedroom"]
								},
								"id": "670592662",
								"picture": "https://a0.muscache.com/im/pictures/0aa197fb-946c-4dad-baf0-6a500d1ef56f.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "670592710",
								"picture": "https://a0.muscache.com/im/pictures/44fbdcd7-2846-4ef0-a2f9-7bfe31043a01.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 double bed"]
								},
								"id": "670592712",
								"picture": "https://a0.muscache.com/im/pictures/a57a6c2c-0b7d-4c0b-a444-a563554b15b9.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "670592721",
								"picture": "https://a0.muscache.com/im/pictures/5dcd742b-9a14-4ef9-acaa-7152f6f23426.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 5 out of 5 for cleanliness"]
								},
								"id": "892066832",
								"picture": "https://a0.muscache.com/im/pictures/0e28f5e6-f4fe-443c-ab77-670630507234.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "2 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bedroom"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bed"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "32018730",
							"isAutoTranslated": false,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire cabin in Florianópolis"],
								"textColor": null
							},
							"lat": -27.406,
							"listingObjType": "REGULAR",
							"lng": -48.42479,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "Casa da Montanha Ludvig",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire cabin"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Florianópolis"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 2,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 65,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": null
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.8,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$364 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1092.0,
										"amountFormatted": "R$1,092",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 200.0,
										"amountFormatted": "R$200",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 182.0,
										"amountFormatted": "R$182",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1474.0,
									"amountFormatted": "R$1,474",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$425",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 425.0,
								"amountFormatted": "R$425",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 425.0,
								"amountFormatted": "R$425",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.9,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$425 per night",
									"price": "R$425",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,474 total",
									"price": "R$1,474 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$364 x 3 nights",
											"priceString": "R$1,092",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$200",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$182",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 4.9,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "648962996",
								"picture": "https://a0.muscache.com/im/pictures/db6b9f27-514d-4385-ae4b-6fbd73d15fbb.jpg?im_w=1200"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["3 beds", "2 bedrooms"]
								},
								"id": "648964638",
								"picture": "https://a0.muscache.com/im/pictures/eee4419b-91f4-43ab-905a-095f1069374e.jpg?im_w=1200"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 baths"]
								},
								"id": "648965332",
								"picture": "https://a0.muscache.com/im/pictures/c4c10ff2-9d39-4e0b-8ec4-3d3c1904deb6.jpg?im_w=1200"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 queen bed", "2 single beds"]
								},
								"id": "648963925",
								"picture": "https://a0.muscache.com/im/pictures/448ca7fc-2112-4298-962f-e9fa79e08511.jpg?im_w=1200"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "648964907",
								"picture": "https://a0.muscache.com/im/pictures/a36e6e11-1565-4c4a-8cd2-e4594ae41b66.jpg?im_w=1200"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 5 out of 5 for cleanliness"]
								},
								"id": "648965020",
								"picture": "https://a0.muscache.com/im/pictures/b568141f-64d9-426e-94dd-7c25fe783380.jpg?im_w=1200"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "PLUS",
								"textColor": "#92174D"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "4 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 bedrooms"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "3 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 baths"
							}],
							"id": "20712016",
							"isAutoTranslated": true,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire rental unit in Armação"],
								"textColor": null
							},
							"lat": -27.70374,
							"listingObjType": "REGULAR",
							"lng": -48.5004,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "Duplex with private hot tub and cinema decor in Campeche",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire rental unit"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Armação"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "PLUS",
							"pdpUrlType": "ROOMS_PLUS",
							"personCapacity": 4,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 120,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 1,
							"titlePrependedIconId": "COMPACT_TRANSLATE"
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": false,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.7,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$640 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1920.0,
										"amountFormatted": "R$1,920",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 150.0,
										"amountFormatted": "R$150",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 292.0,
										"amountFormatted": "R$292",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 2362.0,
									"amountFormatted": "R$2,362",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$737",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 737.0,
								"amountFormatted": "R$737",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 737.0,
								"amountFormatted": "R$737",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.85,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$737 per night",
									"price": "R$737",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$2,362 total",
									"price": "R$2,362 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$640 x 3 nights",
											"priceString": "R$1,920",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$150",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$292",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": true,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": true
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": null,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1237615896",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50026346/original/48bb1230-9f97-4e70-85bd-1824a32d97aa.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 beds", "Studio"]
								},
								"id": "1237616131",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50026346/original/0828ec6c-acef-45ea-9abe-d5e82d18b699.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "1237616005",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50026346/original/5e2e1491-b5eb-4e65-ab4f-9d61dda81c6d.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 king bed", "1 sofa bed"]
								},
								"id": "1237615834",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50026346/original/9722bebb-52a7-4367-9c4b-703d44a68fec.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "1243275825",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50026346/original/19eb6a24-b108-4ae8-b4fc-34c3606b3237.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1237615962",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-50026346/original/6d37fbf5-0e00-457a-aa0f-6627a3d72653.jpeg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "3 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Studio"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "50026346",
							"isAutoTranslated": false,
							"isNewListing": false,
							"isSuperhost": false,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire loft in Florianópolis"],
								"textColor": null
							},
							"lat": -27.701,
							"listingObjType": "REGULAR",
							"lng": -48.4986,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "NOVO Internet, 400m mar, Campeche",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire loft"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Florianópolis"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 3,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 2,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": null
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": false,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.8,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": "Includes extra guest fees.",
									"localizedTitle": "R$330 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 990.0,
										"amountFormatted": "R$990",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 30.0,
										"amountFormatted": "R$30",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 144.0,
										"amountFormatted": "R$144",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1164.0,
									"amountFormatted": "R$1,164",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$378",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 378.0,
								"amountFormatted": "R$378",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 378.0,
								"amountFormatted": "R$378",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.9,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$378 per night",
									"price": "R$378",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,164 total",
									"price": "R$1,164 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$330 x 3 nights",
											"priceString": "R$990",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$30",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$144",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": null,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1245001579",
								"picture": "https://a0.muscache.com/im/pictures/ab3dde9f-5f54-4d66-95de-7db958bc8673.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bed", "1 bedroom"]
								},
								"id": "1241272716",
								"picture": "https://a0.muscache.com/im/pictures/dcdc80a0-6a66-4039-9f34-46cbb25ccb20.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "1241272730",
								"picture": "https://a0.muscache.com/im/pictures/9b5c1456-a2da-480a-8164-26d42e57c0ef.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "1241272767",
								"picture": "https://a0.muscache.com/im/pictures/16ce82dd-a9d7-40ac-813f-fef93079cbb8.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1241272792",
								"picture": "https://a0.muscache.com/im/pictures/a096f102-7f46-42e1-af3c-2440095d7807.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1241272676",
								"picture": "https://a0.muscache.com/im/pictures/38728434-218f-48f2-bd25-c6438e537dbe.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "2 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bedroom"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bed"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "50421832",
							"isAutoTranslated": true,
							"isNewListing": true,
							"isSuperhost": false,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire condominium (condo) in Lagoa da Conceição"],
								"textColor": null
							},
							"lat": -27.59765,
							"listingObjType": "REGULAR",
							"lng": -48.46542,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "place amidst nature",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire condominium (condo)"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Lagoa da Conceição"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 2,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 0,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": "COMPACT_TRANSLATE"
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.0,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$200 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 600.0,
										"amountFormatted": "R$600",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 85.0,
										"amountFormatted": "R$85",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 685.0,
									"amountFormatted": "R$685",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$228",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 228.0,
								"amountFormatted": "R$228",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 228.0,
								"amountFormatted": "R$228",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.0,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$228 per night",
									"price": "R$228",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$685 total",
									"price": "R$685 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$200 x 3 nights",
											"priceString": "R$600",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$85",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 5.0,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1147285811",
								"picture": "https://a0.muscache.com/im/pictures/082aa9a4-d515-48ad-a0b2-a67bd1cc5e48.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 beds", "2 bedrooms"]
								},
								"id": "1151871836",
								"picture": "https://a0.muscache.com/im/pictures/86f76f86-ce7e-49d9-9123-4f065c13c166.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2.5 baths"]
								},
								"id": "1146497759",
								"picture": "https://a0.muscache.com/im/pictures/32b1e470-e8f4-4c86-89a2-38ce4909632e.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 king bed", "1 queen bed"]
								},
								"id": "1101160704",
								"picture": "https://a0.muscache.com/im/pictures/89471ab6-622c-47fe-8b9e-f32486317396.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "1101168945",
								"picture": "https://a0.muscache.com/im/pictures/65f5551a-9fbb-4a9d-a43e-671b17159cdb.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 4.7 out of 5 for cleanliness"]
								},
								"id": "1146489076",
								"picture": "https://a0.muscache.com/im/pictures/70dea361-8403-40e3-8e37-f6dcd0581de0.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "4 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 bedrooms"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2.5 baths"
							}],
							"id": "39338242",
							"isAutoTranslated": false,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire villa in Florianópolis"],
								"textColor": null
							},
							"lat": -27.48723,
							"listingObjType": "REGULAR",
							"lng": -48.52893,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "House with panoramic view in a peaceful place",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire villa"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Florianópolis"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 4,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 29,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": null
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": false,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.7,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$650 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1950.0,
										"amountFormatted": "R$1,950",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 200.0,
										"amountFormatted": "R$200",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 304.0,
										"amountFormatted": "R$304",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 2454.0,
									"amountFormatted": "R$2,454",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$751",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 751.0,
								"amountFormatted": "R$751",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 751.0,
								"amountFormatted": "R$751",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.8,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$751 per night",
									"price": "R$751",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$2,454 total",
									"price": "R$2,454 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$650 x 3 nights",
											"priceString": "R$1,950",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$200",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$304",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 4.5,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1011208915",
								"picture": "https://a0.muscache.com/im/pictures/720af6a1-ebe2-4329-8bdf-7eaea0243767.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bed", "1 bedroom"]
								},
								"id": "993229580",
								"picture": "https://a0.muscache.com/im/pictures/c833ce6c-24c8-4621-a1c5-53300b46f6c5.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 private bath"]
								},
								"id": "993233113",
								"picture": "https://a0.muscache.com/im/pictures/659e86aa-5011-4d6a-93e3-7e9748ab3741.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 queen bed"]
								},
								"id": "993229586",
								"picture": "https://a0.muscache.com/im/pictures/ff7f5f87-9058-4d3f-8143-92e5358433e5.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "993229590",
								"picture": "https://a0.muscache.com/im/pictures/d656c461-e583-495e-8d17-9ddd9f741d71.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 4.5 out of 5 for cleanliness"]
								},
								"id": "1108794502",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-43123207/original/78f18af0-5c30-496d-ac4c-eee0ef2dbc77.jpeg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "2 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bedroom"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bed"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 private bath"
							}],
							"id": "43123207",
							"isAutoTranslated": false,
							"isNewListing": false,
							"isSuperhost": false,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Hotel room in Praia Mole"],
								"textColor": null
							},
							"lat": -27.60191,
							"listingObjType": "REPRESENTATIVE",
							"lng": -48.43711,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "Selina Floripa, Standard Room",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Hotel room"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Praia Mole"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 2,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 28,
							"roomTypeCategory": "private_room",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": null
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": {
								"__typename": "DoraCurrencyAmount",
								"amount": 389.0,
								"amountFormatted": "R$389",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.74,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": "Average nightly rate is rounded.",
									"localizedTitle": "R$389 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1166.0,
										"amountFormatted": "R$1,166",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 6,
									"localizedExplanation": "This discount is available because you are staying for 3 days.",
									"localizedTitle": "Long stay discount",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": -117.0,
										"amountFormatted": "-R$117",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "The service fee, which the host has decided to pay, helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 0.0,
										"amountFormatted": "R$0",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1049.0,
									"amountFormatted": "R$1,049",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": "",
							"priceString": "R$350",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 350.0,
								"amountFormatted": "R$350",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 350.0,
								"amountFormatted": "R$350",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.75,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraDiscountedDisplayPriceLine",
									"displayComponentType": "DISCOUNTED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$350 per night, originally R$389",
									"discountedPrice": "R$350",
									"originalPrice": "R$389",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,049 total",
									"price": "R$1,049 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$389 x 3 nights",
											"priceString": "R$1,166",
											"explanationData": null
										}, {
											"__typename": "DoraDiscountedExplanationLineItem",
											"displayComponentType": "DISCOUNTED_EXPLANATION_LINE_ITEM",
											"description": "Long stay discount",
											"priceString": "-R$117",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$0",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}, {
										"__typename": "DoraDisplayPriceExplanationDisclaimer",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_DISCLAIMER",
										"content": ""
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 4.81,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "951221238",
								"picture": "https://a0.muscache.com/im/pictures/49fcddd4-0eba-4242-998b-eaec65ff3bf2.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["3 beds", "Studio"]
								},
								"id": "951220779",
								"picture": "https://a0.muscache.com/im/pictures/0cb2178e-4faa-4e37-8ef5-8c548673e01b.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "992739742",
								"picture": "https://a0.muscache.com/im/pictures/af863401-45d0-4d6b-8282-27423cb13b26.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 double beds", "1 sofa bed"]
								},
								"id": "951221173",
								"picture": "https://a0.muscache.com/im/pictures/03521bf3-26a8-4e69-93a7-94e224c4a6ff.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "951221206",
								"picture": "https://a0.muscache.com/im/pictures/a63d6cf3-0715-4c7c-86bb-df36df6d39bb.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 4.7 out of 5 for cleanliness"]
								},
								"id": "1010688371",
								"picture": "https://a0.muscache.com/im/pictures/430912c9-101e-4514-8f8a-9af10aec6209.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "5 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Studio"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "3 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "41585397",
							"isAutoTranslated": true,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire chalet in Florianópolis "],
								"textColor": null
							},
							"lat": -27.70254,
							"listingObjType": "REGULAR",
							"lng": -48.49601,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "Lodge at the foot of Praia do Campeche",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire chalet"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Florianópolis "
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 5,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 62,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": "COMPACT_TRANSLATE"
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": false,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.8200000000000001,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$550 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1650.0,
										"amountFormatted": "R$1,650",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 110.0,
										"amountFormatted": "R$110",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 248.0,
										"amountFormatted": "R$248",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 2008.0,
									"amountFormatted": "R$2,008",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$633",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 633.0,
								"amountFormatted": "R$633",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 633.0,
								"amountFormatted": "R$633",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.9,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$633 per night",
									"price": "R$633",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$2,008 total",
									"price": "R$2,008 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$550 x 3 nights",
											"priceString": "R$1,650",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$110",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$248",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 4.44,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1066466465",
								"picture": "https://a0.muscache.com/im/pictures/fcf48711-07ef-4aa3-aa84-d37968d7b627.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bed", "Studio"]
								},
								"id": "1066466959",
								"picture": "https://a0.muscache.com/im/pictures/0925f52b-0c02-4c72-b094-c828fbc6fe4c.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "1066467083",
								"picture": "https://a0.muscache.com/im/pictures/4195b717-832b-4b72-8b14-d95250165004.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Kitchen"]
								},
								"id": "1066467125",
								"picture": "https://a0.muscache.com/im/pictures/e69479dc-6726-42da-b02d-b6f498159d27.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 4.7 out of 5 for cleanliness"]
								},
								"id": "1066467198",
								"picture": "https://a0.muscache.com/im/pictures/c3544a28-2516-49dc-a16c-f1c87f9ed7dc.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1066467254",
								"picture": "https://a0.muscache.com/im/pictures/e148faca-fc68-4374-b620-040818227b29.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "2 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Studio"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bed"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "34683525",
							"isAutoTranslated": true,
							"isNewListing": false,
							"isSuperhost": false,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire loft in Centro"],
								"textColor": null
							},
							"lat": -27.59746,
							"listingObjType": "REGULAR",
							"lng": -48.54799,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "Loft in downtown Florianópolis 08",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire loft"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Centro"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 2,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Kitchen"],
							"relaxedFilterLabels": null,
							"reviewsCount": 39,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": "COMPACT_TRANSLATE"
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.0,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$82 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 246.0,
										"amountFormatted": "R$246",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 35.0,
										"amountFormatted": "R$35",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 281.0,
									"amountFormatted": "R$281",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$94",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 94.0,
								"amountFormatted": "R$94",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 94.0,
								"amountFormatted": "R$94",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.0,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$94 per night",
									"price": "R$94",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$281 total",
									"price": "R$281 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$82 x 3 nights",
											"priceString": "R$246",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$35",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 5.0,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1115514603",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-47375258/original/836a41b0-b3d6-4780-8307-ef53748e63ae.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 beds", "2 bedrooms"]
								},
								"id": "1115518330",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-47375258/original/17121c70-fbd5-41a2-aef3-0362726215ae.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "1115521923",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-47375258/original/0dd352c8-8b7d-45f7-955f-5f822b27b583.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 double bed", "1 single bed", "more"]
								},
								"id": "1115524135",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-47375258/original/72bbb162-c3fe-4a3b-a3a7-50aec1b50809.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Kitchen", "Air conditioning"]
								},
								"id": "1115519012",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-47375258/original/df543667-c9d9-4e7c-99b0-7c503e57ec20.jpeg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 5 out of 5 for cleanliness"]
								},
								"id": "1115524644",
								"picture": "https://a0.muscache.com/im/pictures/miso/Hosting-47375258/original/e9d5558e-6dad-4b51-bf27-ec190dea53ed.jpeg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "4 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 bedrooms"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "47375258",
							"isAutoTranslated": true,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire rental unit in Centro"],
								"textColor": null
							},
							"lat": -27.59076,
							"listingObjType": "REGULAR",
							"lng": -48.54454,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "Street address Floripa",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire rental unit"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Centro"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 4,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 6,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": "COMPACT_TRANSLATE"
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": false,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.9,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$300 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 900.0,
										"amountFormatted": "R$900",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 180.0,
										"amountFormatted": "R$180",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 152.0,
										"amountFormatted": "R$152",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1232.0,
									"amountFormatted": "R$1,232",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$351",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 351.0,
								"amountFormatted": "R$351",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 351.0,
								"amountFormatted": "R$351",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.91,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$351 per night",
									"price": "R$351",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,232 total",
									"price": "R$1,232 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$300 x 3 nights",
											"priceString": "R$900",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$180",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$152",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 5.0,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1185332184",
								"picture": "https://a0.muscache.com/im/pictures/8ecd0179-c16e-4877-9cd6-49a624d20f73.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bed", "1 bedroom"]
								},
								"id": "1185334667",
								"picture": "https://a0.muscache.com/im/pictures/cae13c3a-e063-4a5c-9d08-39c53335b83d.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 baths"]
								},
								"id": "1185332953",
								"picture": "https://a0.muscache.com/im/pictures/62694ba7-bbee-4584-803e-67caa6d8a700.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 queen bed", "1 sofa bed"]
								},
								"id": "1185333240",
								"picture": "https://a0.muscache.com/im/pictures/8c938a60-dcd8-4838-8310-2d148952b434.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "1185333932",
								"picture": "https://a0.muscache.com/im/pictures/1907fd16-37a0-484a-a7e0-970e9d0c3396.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 4.9 out of 5 for cleanliness"]
								},
								"id": "1185334203",
								"picture": "https://a0.muscache.com/im/pictures/065ebc19-a459-44a6-8b71-b2ae1071aaec.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "2 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bedroom"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bed"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 baths"
							}],
							"id": "50025784",
							"isAutoTranslated": true,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire loft in Agronômica"],
								"textColor": null
							},
							"lat": -27.5829,
							"listingObjType": "REGULAR",
							"lng": -48.54299,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "roomin #13 | ZEE I Duplex near Beira Mar",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire loft"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Agronômica"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 2,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 10,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": "COMPACT_TRANSLATE"
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.0,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": "Includes extra guest fees.",
									"localizedTitle": "R$520 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1560.0,
										"amountFormatted": "R$1,560",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 150.0,
										"amountFormatted": "R$150",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "The service fee, which the host has decided to pay, helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 0.0,
										"amountFormatted": "R$0",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1710.0,
									"amountFormatted": "R$1,710",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$520",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 520.0,
								"amountFormatted": "R$520",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 520.0,
								"amountFormatted": "R$520",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.0,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$520 per night",
									"price": "R$520",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,710 total",
									"price": "R$1,710 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$520 x 3 nights",
											"priceString": "R$1,560",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$150",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$0",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 4.95,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "616094184",
								"picture": "https://a0.muscache.com/im/pictures/7d17af38-c208-4137-ad74-21da01cde5df.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 beds", "Studio"]
								},
								"id": "616095551",
								"picture": "https://a0.muscache.com/im/pictures/bac7e063-c9d9-459e-8adb-64cf044fc48d.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "604348755",
								"picture": "https://a0.muscache.com/im/pictures/f85edef1-9563-49c2-a75b-3793cea4d975.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 double bed", "1 sofa bed"]
								},
								"id": "604349269",
								"picture": "https://a0.muscache.com/im/pictures/288d8bbc-5889-4a83-8c5f-651e238381a1.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "604351174",
								"picture": "https://a0.muscache.com/im/pictures/6dc21b64-06f3-40e8-9247-04a3c16acd01.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 4.9 out of 5 for cleanliness"]
								},
								"id": "604351832",
								"picture": "https://a0.muscache.com/im/pictures/f2e219b0-c147-4e38-9a39-3e60f4796736.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "2 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Studio"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "23051855",
							"isAutoTranslated": false,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire loft in Florianópolis"],
								"textColor": null
							},
							"lat": -27.61645,
							"listingObjType": "REGULAR",
							"lng": -48.44542,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "Joaquina Lofts - Loft 04",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire loft"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Florianópolis"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 2,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 21,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": null
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": false,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.0,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$449 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1347.0,
										"amountFormatted": "R$1,347",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 100.0,
										"amountFormatted": "R$100",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 204.0,
										"amountFormatted": "R$204",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1651.0,
									"amountFormatted": "R$1,651",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$517",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 517.0,
								"amountFormatted": "R$517",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 517.0,
								"amountFormatted": "R$517",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.0,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$517 per night",
									"price": "R$517",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,651 total",
									"price": "R$1,651 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$449 x 3 nights",
											"priceString": "R$1,347",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$100",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$204",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 4.93,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "809598051",
								"picture": "https://a0.muscache.com/im/pictures/05747bb5-51ef-4d21-a358-fc612c4cdca9.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bed", "Studio"]
								},
								"id": "809590327",
								"picture": "https://a0.muscache.com/im/pictures/bad570a6-9344-472a-9d33-d88a24f0afd5.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "809590470",
								"picture": "https://a0.muscache.com/im/pictures/b4e42b1e-7c2f-454f-8cef-f6733eabfda3.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "809590487",
								"picture": "https://a0.muscache.com/im/pictures/76b738f2-aafd-4e6b-9d71-e8dfd09d819a.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 4.7 out of 5 for cleanliness"]
								},
								"id": "809590550",
								"picture": "https://a0.muscache.com/im/pictures/f7232694-e2dd-4934-9ea8-2c8c018aa15b.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": null,
								"id": "809590575",
								"picture": "https://a0.muscache.com/im/pictures/098fe879-d854-47a2-af5c-eb1f5a69b0c6.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [{
								"__typename": "DoraFormattedBadge",
								"backgroundColor": "rgba(255, 255, 255, 0.95)",
								"borderColor": "rgba(0, 0, 0, 0.2)",
								"text": "SUPERHOST",
								"textColor": "#222222"
							}],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "2 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Studio"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bed"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "36761072",
							"isAutoTranslated": false,
							"isNewListing": false,
							"isSuperhost": true,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire loft in Florianópolis"],
								"textColor": null
							},
							"lat": -27.59006,
							"listingObjType": "REGULAR",
							"lng": -48.43518,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "Beautiful and cozy Loft with a lake view",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire loft"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Florianópolis"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 2,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 30,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": null
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.55,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$399 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1197.0,
										"amountFormatted": "R$1,197",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 120.0,
										"amountFormatted": "R$120",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 186.0,
										"amountFormatted": "R$186",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1503.0,
									"amountFormatted": "R$1,503",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$461",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 461.0,
								"amountFormatted": "R$461",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 461.0,
								"amountFormatted": "R$461",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.9,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$461 per night",
									"price": "R$461",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,503 total",
									"price": "R$1,503 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$399 x 3 nights",
											"priceString": "R$1,197",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$120",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$186",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": null,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1242065341",
								"picture": "https://a0.muscache.com/im/pictures/ac3b0519-3603-4361-976d-61ac332d33b1.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 beds", "1 bedroom"]
								},
								"id": "1242065342",
								"picture": "https://a0.muscache.com/im/pictures/0f53207a-1a0e-4858-858d-63167badaa8d.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "1242065343",
								"picture": "https://a0.muscache.com/im/pictures/9a692956-f0c8-4f90-8b8f-d6f06c17008f.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 double bed", "1 sofa bed"]
								},
								"id": "1242065344",
								"picture": "https://a0.muscache.com/im/pictures/f424f789-f24f-4a17-9549-4d8c8cf380a8.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "1242065345",
								"picture": "https://a0.muscache.com/im/pictures/39b8abc6-8eaa-4776-85b0-006f03a36cb0.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1242065346",
								"picture": "https://a0.muscache.com/im/pictures/83cee589-6b59-4802-836c-eae1c747641f.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "3 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bedroom"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "51818201",
							"isAutoTranslated": true,
							"isNewListing": true,
							"isSuperhost": false,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire cabin in Ponta das Canas"],
								"textColor": null
							},
							"lat": -27.39886,
							"listingObjType": "REGULAR",
							"lng": -48.42546,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "Unique experience overlooking the sea .",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire cabin"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Ponta das Canas"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 3,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 1,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": "COMPACT_TRANSLATE"
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": true,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.85,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$450 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 1350.0,
										"amountFormatted": "R$1,350",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 191.0,
										"amountFormatted": "R$191",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1541.0,
									"amountFormatted": "R$1,541",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$514",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 514.0,
								"amountFormatted": "R$514",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 514.0,
								"amountFormatted": "R$514",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.9,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$514 per night",
									"price": "R$514",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,541 total",
									"price": "R$1,541 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$450 x 3 nights",
											"priceString": "R$1,350",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$191",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}, {
						"__typename": "DoraListingItem",
						"listing": {
							"__typename": "DoraListing",
							"avgRating": 5.0,
							"contextualPictures": [{
								"__typename": "DoraPicture",
								"caption": null,
								"id": "1118864752",
								"picture": "https://a0.muscache.com/im/pictures/f33ff9fb-9ee0-4def-b401-b4d95cdcd4f1.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["2 beds", "1 bedroom"]
								},
								"id": "1118865022",
								"picture": "https://a0.muscache.com/im/pictures/02b7a97d-b82a-48a6-ab62-c82949da5e9f.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 bath"]
								},
								"id": "1118864768",
								"picture": "https://a0.muscache.com/im/pictures/9e105465-6281-4b80-8c02-ef55f30481e9.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["1 double bed", "1 sofa bed"]
								},
								"id": "1118864770",
								"picture": "https://a0.muscache.com/im/pictures/bbe38e86-beea-47ca-a53e-6f0401018cdf.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Wifi", "Free parking", "Kitchen", "Air conditioning"]
								},
								"id": "1118864772",
								"picture": "https://a0.muscache.com/im/pictures/24c185cd-2654-40a3-b180-5e17c688c6e8.jpg?im_w=720"
							}, {
								"__typename": "DoraPicture",
								"caption": {
									"__typename": "DoraKickerContent",
									"kickerBadge": null,
									"messages": ["Rated 4.7 out of 5 for cleanliness"]
								},
								"id": "1118864880",
								"picture": "https://a0.muscache.com/im/pictures/9b2c42c5-50bf-4504-b241-51dbec08b0f6.jpg?im_w=720"
							}],
							"contextualPicturesPageInfo": {
								"__typename": "DoraViaductPageInfo",
								"hasNextPage": true,
								"endCursor": "NQ=="
							},
							"formattedBadges": [],
							"homeDetails": [{
								"__typename": "DoraBasicListItem",
								"title": "4 guests"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bedroom"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "2 beds"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "1 bath"
							}],
							"id": "47574695",
							"isAutoTranslated": true,
							"isNewListing": false,
							"isSuperhost": false,
							"kickerContent": {
								"__typename": "DoraKickerContent",
								"kickerBadge": null,
								"messages": ["Entire loft in Agronômica"],
								"textColor": null
							},
							"lat": -27.58147,
							"listingObjType": "REGULAR",
							"lng": -48.54268,
							"localizedDistanceText": null,
							"locationTitle": null,
							"mainSectionMessage": null,
							"mainSectionMessages": [],
							"name": "NEW loft - Agronomic - Beira Mar Florianópolis !",
							"overview": [{
								"__typename": "DoraBasicListItem",
								"title": "Entire loft"
							}, {
								"__typename": "DoraBasicListItem",
								"title": "Agronômica"
							}],
							"pdpDisplayExtensions": [],
							"pdpType": "MARKETPLACE",
							"pdpUrlType": "ROOMS",
							"personCapacity": 4,
							"pictureUrls": [],
							"previewAmenityNames": ["Wifi", "Free parking", "Kitchen", "Air conditioning"],
							"relaxedFilterLabels": null,
							"reviewsCount": 3,
							"roomTypeCategory": "entire_home",
							"roomTypeId": null,
							"showPhotoSwipeIndicator": true,
							"summary": null,
							"tierId": 0,
							"titlePrependedIconId": "COMPACT_TRANSLATE"
						},
						"listingParamOverrides": null,
						"luxuryInfo": null,
						"pricingQuote": {
							"__typename": "DoraPricingQuote",
							"applicableDiscounts": null,
							"barDisplayPriceWithoutDiscount": null,
							"canInstantBook": false,
							"displayRateDisplayStrategy": null,
							"monthlyPriceFactor": 0.8,
							"price": {
								"__typename": "DoraPrice",
								"lineItemType": null,
								"localizedExplanation": null,
								"localizedTitle": "Total",
								"priceItems": [{
									"__typename": "DoraPrice",
									"lineItemType": 2,
									"localizedExplanation": null,
									"localizedTitle": "R$280 x 3 nights",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 840.0,
										"amountFormatted": "R$840",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 5,
									"localizedExplanation": "One-time fee charged by host to cover the cost of cleaning their space.",
									"localizedTitle": "Cleaning fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 150.0,
										"amountFormatted": "R$150",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}, {
									"__typename": "DoraPrice",
									"lineItemType": 4,
									"localizedExplanation": "This helps us run our platform and offer services like 24/7 support on your trip.",
									"localizedTitle": "Service fee",
									"total": {
										"__typename": "DoraCurrencyAmount",
										"amount": 140.0,
										"amountFormatted": "R$140",
										"currency": "BRL",
										"isMicrosAccuracy": false
									}
								}],
								"total": {
									"__typename": "DoraCurrencyAmount",
									"amount": 1130.0,
									"amountFormatted": "R$1,130",
									"currency": "BRL",
									"isMicrosAccuracy": false
								}
							},
							"priceDropDisclaimer": null,
							"priceString": "R$327",
							"rate": {
								"__typename": "DoraCurrencyAmount",
								"amount": 327.0,
								"amountFormatted": "R$327",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"rateType": "nightly",
							"rateWithoutDiscount": null,
							"rateWithServiceFee": {
								"__typename": "DoraCurrencyAmount",
								"amount": 327.0,
								"amountFormatted": "R$327",
								"currency": "BRL",
								"isMicrosAccuracy": false
							},
							"secondaryPriceString": null,
							"shouldShowFromLabel": false,
							"totalPriceDisclaimer": null,
							"totalPriceWithoutDiscount": null,
							"weeklyPriceFactor": 0.95,
							"structuredStayDisplayPrice": {
								"__typename": "DoraStructuredDisplayPrice",
								"primaryLine": {
									"__typename": "DoraQualifiedDisplayPriceLine",
									"displayComponentType": "QUALIFIED_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$327 per night",
									"price": "R$327",
									"qualifier": "/ night",
									"concatQualifierLeft": false
								},
								"secondaryLine": {
									"__typename": "DoraBasicDisplayPriceLine",
									"displayComponentType": "BASIC_DISPLAY_PRICE_LINE",
									"accessibilityLabel": "R$1,130 total",
									"price": "R$1,130 total"
								},
								"explanationData": {
									"__typename": "DoraDisplayPriceExplanationData",
									"title": "Price breakdown",
									"priceDetails": [{
										"__typename": "DoraDisplayPriceExplanationLineGroup",
										"displayComponentType": "DISPLAY_PRICE_EXPLANATION_LINE_GROUP",
										"items": [{
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "R$280 x 3 nights",
											"priceString": "R$840",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Cleaning fee",
											"priceString": "R$150",
											"explanationData": null
										}, {
											"__typename": "DoraDefaultExplanationLineItem",
											"displayComponentType": "DEFAULT_EXPLANATION_LINE_ITEM",
											"description": "Service fee",
											"priceString": "R$140",
											"explanationData": null
										}],
										"renderBorderTop": false,
										"collapsable": null
									}]
								},
								"explanationDataDisplayPosition": "SECONDARY_LINE",
								"explanationDataDisplayPriceTriggerType": null
							}
						},
						"verified": {
							"__typename": "DoraVerified",
							"badgeSecondaryText": "Verified",
							"badgeText": "Plus",
							"enabled": false,
							"kickerBadgeType": "filled"
						},
						"verifiedCard": false
					}]
				}],
				"pageTitle": {
					"__typename": "DoraPageTitle",
					"title": "Stays in Florianópolis",
					"mapTitle": null,
					"subtitle": null,
					"structuredTitle": null,
					"kicker": "300+ stays · Jan 10 - 13 · 2 guests",
					"breadcrumbs": null,
					"sectionOptionToggle": null
				}
			}
		}
	},
	"extensions": {
		"traceId": "SjZmtURqpEvp-mu7V2IGaw=="
	}
}