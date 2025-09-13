# AdAccounts

Types:

- <code><a href="./src/resources/ad-accounts/ad-accounts.ts">AdAccountRetrieveResponse</a></code>
- <code><a href="./src/resources/ad-accounts/ad-accounts.ts">AdAccountUpdateResponse</a></code>
- <code><a href="./src/resources/ad-accounts/ad-accounts.ts">AdAccountGenerateReportResponse</a></code>
- <code><a href="./src/resources/ad-accounts/ad-accounts.ts">AdAccountGetHistoryResponse</a></code>
- <code><a href="./src/resources/ad-accounts/ad-accounts.ts">AdAccountListFundingInstrumentsResponse</a></code>
- <code><a href="./src/resources/ad-accounts/ad-accounts.ts">AdAccountListPixelsResponse</a></code>
- <code><a href="./src/resources/ad-accounts/ad-accounts.ts">AdAccountListProfilesResponse</a></code>

Methods:

- <code title="get /ad_accounts/{ad_account_id}">client.adAccounts.<a href="./src/resources/ad-accounts/ad-accounts.ts">retrieve</a>(adAccountID) -> AdAccountRetrieveResponse</code>
- <code title="patch /ad_accounts/{ad_account_id}">client.adAccounts.<a href="./src/resources/ad-accounts/ad-accounts.ts">update</a>(adAccountID, { ...params }) -> AdAccountUpdateResponse</code>
- <code title="post /ad_accounts/{ad_account_id}/reports">client.adAccounts.<a href="./src/resources/ad-accounts/ad-accounts.ts">generateReport</a>(adAccountID, { ...params }) -> AdAccountGenerateReportResponse</code>
- <code title="post /ad_accounts/{ad_account_id}/history">client.adAccounts.<a href="./src/resources/ad-accounts/ad-accounts.ts">getHistory</a>(adAccountID, { ...params }) -> AdAccountGetHistoryResponse</code>
- <code title="get /ad_accounts/{ad_account_id}/funding_instruments">client.adAccounts.<a href="./src/resources/ad-accounts/ad-accounts.ts">listFundingInstruments</a>(adAccountID, { ...params }) -> AdAccountListFundingInstrumentsResponse</code>
- <code title="get /ad_accounts/{ad_account_id}/pixels">client.adAccounts.<a href="./src/resources/ad-accounts/ad-accounts.ts">listPixels</a>(adAccountID, { ...params }) -> AdAccountListPixelsResponse</code>
- <code title="get /ad_accounts/{ad_account_id}/profiles">client.adAccounts.<a href="./src/resources/ad-accounts/ad-accounts.ts">listProfiles</a>(adAccountID, { ...params }) -> AdAccountListProfilesResponse</code>

## AdGroups

Types:

- <code><a href="./src/resources/ad-accounts/ad-groups.ts">AdGroupCreateResponse</a></code>
- <code><a href="./src/resources/ad-accounts/ad-groups.ts">AdGroupListResponse</a></code>

Methods:

- <code title="post /ad_accounts/{ad_account_id}/ad_groups">client.adAccounts.adGroups.<a href="./src/resources/ad-accounts/ad-groups.ts">create</a>(adAccountID, { ...params }) -> AdGroupCreateResponse</code>
- <code title="get /ad_accounts/{ad_account_id}/ad_groups">client.adAccounts.adGroups.<a href="./src/resources/ad-accounts/ad-groups.ts">list</a>(adAccountID, { ...params }) -> AdGroupListResponse</code>

## Ads

Types:

- <code><a href="./src/resources/ad-accounts/ads.ts">AdCreateResponse</a></code>
- <code><a href="./src/resources/ad-accounts/ads.ts">AdListResponse</a></code>

Methods:

- <code title="post /ad_accounts/{ad_account_id}/ads">client.adAccounts.ads.<a href="./src/resources/ad-accounts/ads.ts">create</a>(adAccountID, { ...params }) -> AdCreateResponse</code>
- <code title="get /ad_accounts/{ad_account_id}/ads">client.adAccounts.ads.<a href="./src/resources/ad-accounts/ads.ts">list</a>(adAccountID, { ...params }) -> AdListResponse</code>

## Campaigns

Types:

- <code><a href="./src/resources/ad-accounts/campaigns.ts">CampaignCreateResponse</a></code>
- <code><a href="./src/resources/ad-accounts/campaigns.ts">CampaignListResponse</a></code>

Methods:

- <code title="post /ad_accounts/{ad_account_id}/campaigns">client.adAccounts.campaigns.<a href="./src/resources/ad-accounts/campaigns.ts">create</a>(adAccountID, { ...params }) -> CampaignCreateResponse</code>
- <code title="get /ad_accounts/{ad_account_id}/campaigns">client.adAccounts.campaigns.<a href="./src/resources/ad-accounts/campaigns.ts">list</a>(adAccountID, { ...params }) -> CampaignListResponse</code>

## CustomAudiences

Types:

- <code><a href="./src/resources/ad-accounts/custom-audiences.ts">CustomAudienceCreateResponse</a></code>
- <code><a href="./src/resources/ad-accounts/custom-audiences.ts">CustomAudienceListResponse</a></code>

Methods:

- <code title="post /ad_accounts/{ad_account_id}/custom_audiences">client.adAccounts.customAudiences.<a href="./src/resources/ad-accounts/custom-audiences.ts">create</a>(adAccountID, { ...params }) -> CustomAudienceCreateResponse</code>
- <code title="get /ad_accounts/{ad_account_id}/custom_audiences">client.adAccounts.customAudiences.<a href="./src/resources/ad-accounts/custom-audiences.ts">list</a>(adAccountID, { ...params }) -> CustomAudienceListResponse</code>

## LeadGenForms

Types:

- <code><a href="./src/resources/ad-accounts/lead-gen-forms.ts">LeadGenFormCreateResponse</a></code>
- <code><a href="./src/resources/ad-accounts/lead-gen-forms.ts">LeadGenFormListResponse</a></code>

Methods:

- <code title="post /ad_accounts/{ad_account_id}/lead_gen_forms">client.adAccounts.leadGenForms.<a href="./src/resources/ad-accounts/lead-gen-forms.ts">create</a>(adAccountID, { ...params }) -> LeadGenFormCreateResponse</code>
- <code title="get /ad_accounts/{ad_account_id}/lead_gen_forms">client.adAccounts.leadGenForms.<a href="./src/resources/ad-accounts/lead-gen-forms.ts">list</a>(adAccountID, { ...params }) -> LeadGenFormListResponse</code>

## SavedAudiences

Types:

- <code><a href="./src/resources/ad-accounts/saved-audiences.ts">SavedAudienceCreateResponse</a></code>
- <code><a href="./src/resources/ad-accounts/saved-audiences.ts">SavedAudienceListResponse</a></code>

Methods:

- <code title="post /ad_accounts/{ad_account_id}/saved_audiences">client.adAccounts.savedAudiences.<a href="./src/resources/ad-accounts/saved-audiences.ts">create</a>(adAccountID, { ...params }) -> SavedAudienceCreateResponse</code>
- <code title="get /ad_accounts/{ad_account_id}/saved_audiences">client.adAccounts.savedAudiences.<a href="./src/resources/ad-accounts/saved-audiences.ts">list</a>(adAccountID, { ...params }) -> SavedAudienceListResponse</code>

# AdGroups

Types:

- <code><a href="./src/resources/ad-groups.ts">AdGroupRetrieveResponse</a></code>
- <code><a href="./src/resources/ad-groups.ts">AdGroupUpdateResponse</a></code>

Methods:

- <code title="get /ad_groups/{ad_group_id}">client.adGroups.<a href="./src/resources/ad-groups.ts">retrieve</a>(adGroupID) -> AdGroupRetrieveResponse</code>
- <code title="patch /ad_groups/{ad_group_id}">client.adGroups.<a href="./src/resources/ad-groups.ts">update</a>(adGroupID, { ...params }) -> AdGroupUpdateResponse</code>

# Ads

Types:

- <code><a href="./src/resources/ads.ts">AdRetrieveResponse</a></code>
- <code><a href="./src/resources/ads.ts">AdUpdateResponse</a></code>

Methods:

- <code title="get /ads/{ad_id}">client.ads.<a href="./src/resources/ads.ts">retrieve</a>(adID) -> AdRetrieveResponse</code>
- <code title="patch /ads/{ad_id}">client.ads.<a href="./src/resources/ads.ts">update</a>(adID, { ...params }) -> AdUpdateResponse</code>

# Apps

Types:

- <code><a href="./src/resources/apps.ts">AppRetrieveLastFiredAtReportResponse</a></code>
- <code><a href="./src/resources/apps.ts">AppRetrieveSkanAvailabilityResponse</a></code>

Methods:

- <code title="get /apps/{app_id}/last_fired_at_report">client.apps.<a href="./src/resources/apps.ts">retrieveLastFiredAtReport</a>(appID) -> AppRetrieveLastFiredAtReportResponse</code>
- <code title="get /apps/{app_id}/skan_availability">client.apps.<a href="./src/resources/apps.ts">retrieveSkanAvailability</a>(appID, { ...params }) -> AppRetrieveSkanAvailabilityResponse</code>

# Businesses

Types:

- <code><a href="./src/resources/businesses/businesses.ts">BusinessRetrieveResponse</a></code>
- <code><a href="./src/resources/businesses/businesses.ts">BusinessUpdateResponse</a></code>
- <code><a href="./src/resources/businesses/businesses.ts">BusinessListPixelsResponse</a></code>
- <code><a href="./src/resources/businesses/businesses.ts">BusinessListProfilesResponse</a></code>

Methods:

- <code title="get /businesses/{business_id}">client.businesses.<a href="./src/resources/businesses/businesses.ts">retrieve</a>(businessID) -> BusinessRetrieveResponse</code>
- <code title="patch /businesses/{business_id}">client.businesses.<a href="./src/resources/businesses/businesses.ts">update</a>(businessID, { ...params }) -> BusinessUpdateResponse</code>
- <code title="get /businesses/{business_id}/pixels">client.businesses.<a href="./src/resources/businesses/businesses.ts">listPixels</a>(businessID, { ...params }) -> BusinessListPixelsResponse</code>
- <code title="get /businesses/{business_id}/profiles">client.businesses.<a href="./src/resources/businesses/businesses.ts">listProfiles</a>(businessID, { ...params }) -> BusinessListProfilesResponse</code>

## AdAccounts

Types:

- <code><a href="./src/resources/businesses/ad-accounts.ts">AdAccountListResponse</a></code>
- <code><a href="./src/resources/businesses/ad-accounts.ts">AdAccountQueryResponse</a></code>

Methods:

- <code title="get /businesses/{business_id}/ad_accounts">client.businesses.adAccounts.<a href="./src/resources/businesses/ad-accounts.ts">list</a>(businessID, { ...params }) -> AdAccountListResponse</code>
- <code title="post /businesses/{business_id}/ad_accounts/query">client.businesses.adAccounts.<a href="./src/resources/businesses/ad-accounts.ts">query</a>(businessID, { ...params }) -> AdAccountQueryResponse</code>

## FundingInstruments

Types:

- <code><a href="./src/resources/businesses/funding-instruments.ts">FundingInstrumentQueryResponse</a></code>

Methods:

- <code title="post /businesses/{business_id}/funding_instruments/query">client.businesses.fundingInstruments.<a href="./src/resources/businesses/funding-instruments.ts">query</a>(businessID, { ...params }) -> FundingInstrumentQueryResponse</code>

## ProductCatalogs

Types:

- <code><a href="./src/resources/businesses/product-catalogs.ts">ProductCatalogCreateResponse</a></code>
- <code><a href="./src/resources/businesses/product-catalogs.ts">ProductCatalogListResponse</a></code>

Methods:

- <code title="post /businesses/{business_id}/product_catalogs">client.businesses.productCatalogs.<a href="./src/resources/businesses/product-catalogs.ts">create</a>(businessID, { ...params }) -> ProductCatalogCreateResponse</code>
- <code title="get /businesses/{business_id}/product_catalogs">client.businesses.productCatalogs.<a href="./src/resources/businesses/product-catalogs.ts">list</a>(businessID) -> ProductCatalogListResponse</code>

# Campaigns

Types:

- <code><a href="./src/resources/campaigns.ts">CampaignRetrieveResponse</a></code>
- <code><a href="./src/resources/campaigns.ts">CampaignUpdateResponse</a></code>

Methods:

- <code title="get /campaigns/{campaign_id}">client.campaigns.<a href="./src/resources/campaigns.ts">retrieve</a>(campaignID) -> CampaignRetrieveResponse</code>
- <code title="patch /campaigns/{campaign_id}">client.campaigns.<a href="./src/resources/campaigns.ts">update</a>(campaignID, { ...params }) -> CampaignUpdateResponse</code>

# CatalogImports

Types:

- <code><a href="./src/resources/catalog-imports.ts">CatalogImportListIssuesResponse</a></code>
- <code><a href="./src/resources/catalog-imports.ts">CatalogImportRetrieveReportResponse</a></code>

Methods:

- <code title="get /catalog_imports/{import_id}/issues">client.catalogImports.<a href="./src/resources/catalog-imports.ts">listIssues</a>(importID, { ...params }) -> CatalogImportListIssuesResponse</code>
- <code title="get /catalog_imports/{import_id}/report">client.catalogImports.<a href="./src/resources/catalog-imports.ts">retrieveReport</a>(importID) -> CatalogImportRetrieveReportResponse</code>

# CustomAudiences

Types:

- <code><a href="./src/resources/custom-audiences.ts">CustomAudienceRetrieveResponse</a></code>

Methods:

- <code title="get /custom_audiences/{audience_id}">client.customAudiences.<a href="./src/resources/custom-audiences.ts">retrieve</a>(audienceID) -> CustomAudienceRetrieveResponse</code>
- <code title="delete /custom_audiences/{audience_id}">client.customAudiences.<a href="./src/resources/custom-audiences.ts">delete</a>(audienceID) -> void</code>
- <code title="patch /custom_audiences/{audience_id}/users">client.customAudiences.<a href="./src/resources/custom-audiences.ts">updateUsers</a>(audienceID, { ...params }) -> void</code>

# Forecasting

Types:

- <code><a href="./src/resources/forecasting.ts">ForecastingSuggestBidsResponse</a></code>

Methods:

- <code title="post /forecasting/bid_suggestions">client.forecasting.<a href="./src/resources/forecasting.ts">suggestBids</a>({ ...params }) -> ForecastingSuggestBidsResponse</code>

# FundingInstruments

Types:

- <code><a href="./src/resources/funding-instruments.ts">FundingInstrumentListAllocationsResponse</a></code>

Methods:

- <code title="get /funding_instruments/{funding_instrument_id}/allocations">client.fundingInstruments.<a href="./src/resources/funding-instruments.ts">listAllocations</a>(fundingInstrumentID, { ...params }) -> FundingInstrumentListAllocationsResponse</code>

# GeneratedContent

## InspirationCreatives

Types:

- <code><a href="./src/resources/generated-content/inspiration-creatives.ts">InspirationCreativeRetrieveSummaryResponse</a></code>
- <code><a href="./src/resources/generated-content/inspiration-creatives.ts">InspirationCreativeSearchResponse</a></code>

Methods:

- <code title="get /generated_content/inspiration_creatives/{inspiration_creative_id}/summary">client.generatedContent.inspirationCreatives.<a href="./src/resources/generated-content/inspiration-creatives.ts">retrieveSummary</a>(inspirationCreativeID) -> InspirationCreativeRetrieveSummaryResponse</code>
- <code title="post /generated_content/inspiration_creatives/search">client.generatedContent.inspirationCreatives.<a href="./src/resources/generated-content/inspiration-creatives.ts">search</a>({ ...params }) -> InspirationCreativeSearchResponse</code>

# Industries

Types:

- <code><a href="./src/resources/industries.ts">IndustryListResponse</a></code>

Methods:

- <code title="get /industries">client.industries.<a href="./src/resources/industries.ts">list</a>() -> IndustryListResponse</code>

# LeadGenForms

Types:

- <code><a href="./src/resources/lead-gen-forms.ts">LeadGenFormRetrieveResponse</a></code>

Methods:

- <code title="get /lead_gen_forms/{lead_gen_form_id}">client.leadGenForms.<a href="./src/resources/lead-gen-forms.ts">retrieve</a>(leadGenFormID) -> LeadGenFormRetrieveResponse</code>

# Me

Types:

- <code><a href="./src/resources/me.ts">MeRetrieveResponse</a></code>
- <code><a href="./src/resources/me.ts">MeListBusinessesResponse</a></code>

Methods:

- <code title="get /me">client.me.<a href="./src/resources/me.ts">retrieve</a>() -> MeRetrieveResponse</code>
- <code title="get /me/businesses">client.me.<a href="./src/resources/me.ts">listBusinesses</a>({ ...params }) -> MeListBusinessesResponse</code>

# Pixels

Types:

- <code><a href="./src/resources/pixels.ts">PixelRetrieveLastFiredAtResponse</a></code>

Methods:

- <code title="get /pixels/{pixel_id}/last_fired_at">client.pixels.<a href="./src/resources/pixels.ts">retrieveLastFiredAt</a>(pixelID) -> PixelRetrieveLastFiredAtResponse</code>

# Posts

Types:

- <code><a href="./src/resources/posts.ts">PostRetrieveResponse</a></code>
- <code><a href="./src/resources/posts.ts">PostUpdateResponse</a></code>

Methods:

- <code title="get /posts/{post_id}">client.posts.<a href="./src/resources/posts.ts">retrieve</a>(postID) -> PostRetrieveResponse</code>
- <code title="patch /posts/{post_id}">client.posts.<a href="./src/resources/posts.ts">update</a>(postID, { ...params }) -> PostUpdateResponse</code>

# ProductCatalogs

Types:

- <code><a href="./src/resources/product-catalogs/product-catalogs.ts">ProductCatalogRetrieveResponse</a></code>
- <code><a href="./src/resources/product-catalogs/product-catalogs.ts">ProductCatalogUpdateResponse</a></code>
- <code><a href="./src/resources/product-catalogs/product-catalogs.ts">ProductCatalogListImportsResponse</a></code>

Methods:

- <code title="get /product_catalogs/{catalog_id}">client.productCatalogs.<a href="./src/resources/product-catalogs/product-catalogs.ts">retrieve</a>(catalogID) -> ProductCatalogRetrieveResponse</code>
- <code title="patch /product_catalogs/{catalog_id}">client.productCatalogs.<a href="./src/resources/product-catalogs/product-catalogs.ts">update</a>(catalogID, { ...params }) -> ProductCatalogUpdateResponse</code>
- <code title="delete /product_catalogs/{catalog_id}">client.productCatalogs.<a href="./src/resources/product-catalogs/product-catalogs.ts">delete</a>(catalogID) -> void</code>
- <code title="get /product_catalogs/{catalog_id}/catalog_imports">client.productCatalogs.<a href="./src/resources/product-catalogs/product-catalogs.ts">listImports</a>(catalogID, { ...params }) -> ProductCatalogListImportsResponse</code>

## ProductFeeds

Types:

- <code><a href="./src/resources/product-catalogs/product-feeds.ts">ProductFeedCreateResponse</a></code>
- <code><a href="./src/resources/product-catalogs/product-feeds.ts">ProductFeedListResponse</a></code>

Methods:

- <code title="post /product_catalogs/{catalog_id}/product_feeds">client.productCatalogs.productFeeds.<a href="./src/resources/product-catalogs/product-feeds.ts">create</a>(catalogID, { ...params }) -> ProductFeedCreateResponse</code>
- <code title="get /product_catalogs/{catalog_id}/product_feeds">client.productCatalogs.productFeeds.<a href="./src/resources/product-catalogs/product-feeds.ts">list</a>(catalogID) -> ProductFeedListResponse</code>

## ProductSets

Types:

- <code><a href="./src/resources/product-catalogs/product-sets.ts">ProductSetCreateResponse</a></code>
- <code><a href="./src/resources/product-catalogs/product-sets.ts">ProductSetListResponse</a></code>

Methods:

- <code title="post /product_catalogs/{catalog_id}/product_sets">client.productCatalogs.productSets.<a href="./src/resources/product-catalogs/product-sets.ts">create</a>(catalogID, { ...params }) -> ProductSetCreateResponse</code>
- <code title="get /product_catalogs/{catalog_id}/product_sets">client.productCatalogs.productSets.<a href="./src/resources/product-catalogs/product-sets.ts">list</a>(catalogID, { ...params }) -> ProductSetListResponse</code>

## Products

Types:

- <code><a href="./src/resources/product-catalogs/products.ts">ProductListResponse</a></code>
- <code><a href="./src/resources/product-catalogs/products.ts">ProductBatchDeleteResponse</a></code>

Methods:

- <code title="get /product_catalogs/{catalog_id}/products">client.productCatalogs.products.<a href="./src/resources/product-catalogs/products.ts">list</a>(catalogID, { ...params }) -> ProductListResponse</code>
- <code title="post /product_catalogs/{catalog_id}/products/batch_delete">client.productCatalogs.products.<a href="./src/resources/product-catalogs/products.ts">batchDelete</a>(catalogID, { ...params }) -> ProductBatchDeleteResponse</code>
- <code title="post /product_catalogs/{catalog_id}/products/batch_upsert">client.productCatalogs.products.<a href="./src/resources/product-catalogs/products.ts">batchUpsert</a>(catalogID, { ...params }) -> void</code>

# ProductFeeds

Types:

- <code><a href="./src/resources/product-feeds.ts">ProductFeedRetrieveResponse</a></code>
- <code><a href="./src/resources/product-feeds.ts">ProductFeedUpdateResponse</a></code>

Methods:

- <code title="get /product_feeds/{feed_id}">client.productFeeds.<a href="./src/resources/product-feeds.ts">retrieve</a>(feedID) -> ProductFeedRetrieveResponse</code>
- <code title="patch /product_feeds/{feed_id}">client.productFeeds.<a href="./src/resources/product-feeds.ts">update</a>(feedID, { ...params }) -> ProductFeedUpdateResponse</code>
- <code title="delete /product_feeds/{feed_id}">client.productFeeds.<a href="./src/resources/product-feeds.ts">delete</a>(feedID) -> void</code>

# ProductSets

Types:

- <code><a href="./src/resources/product-sets.ts">ProductSetRetrieveResponse</a></code>
- <code><a href="./src/resources/product-sets.ts">ProductSetUpdateResponse</a></code>
- <code><a href="./src/resources/product-sets.ts">ProductSetListProductsResponse</a></code>

Methods:

- <code title="get /product_sets/{product_set_id}">client.productSets.<a href="./src/resources/product-sets.ts">retrieve</a>(productSetID) -> ProductSetRetrieveResponse</code>
- <code title="patch /product_sets/{product_set_id}">client.productSets.<a href="./src/resources/product-sets.ts">update</a>(productSetID, { ...params }) -> ProductSetUpdateResponse</code>
- <code title="delete /product_sets/{product_set_id}">client.productSets.<a href="./src/resources/product-sets.ts">delete</a>(productSetID) -> void</code>
- <code title="get /product_sets/{product_set_id}/products">client.productSets.<a href="./src/resources/product-sets.ts">listProducts</a>(productSetID, { ...params }) -> ProductSetListProductsResponse</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles/profiles.ts">ProfileRetrieveResponse</a></code>

Methods:

- <code title="get /profiles/{profile_id}">client.profiles.<a href="./src/resources/profiles/profiles.ts">retrieve</a>(profileID) -> ProfileRetrieveResponse</code>

## Posts

Types:

- <code><a href="./src/resources/profiles/posts.ts">PostCreateResponse</a></code>
- <code><a href="./src/resources/profiles/posts.ts">PostListResponse</a></code>

Methods:

- <code title="post /profiles/{profile_id}/posts">client.profiles.posts.<a href="./src/resources/profiles/posts.ts">create</a>(profileID, { ...params }) -> PostCreateResponse</code>
- <code title="get /profiles/{profile_id}/posts">client.profiles.posts.<a href="./src/resources/profiles/posts.ts">list</a>(profileID, { ...params }) -> PostListResponse</code>

# SavedAudiences

Types:

- <code><a href="./src/resources/saved-audiences.ts">SavedAudienceRetrieveResponse</a></code>
- <code><a href="./src/resources/saved-audiences.ts">SavedAudienceUpdateResponse</a></code>

Methods:

- <code title="get /saved_audiences/{saved_audience_id}">client.savedAudiences.<a href="./src/resources/saved-audiences.ts">retrieve</a>(savedAudienceID) -> SavedAudienceRetrieveResponse</code>
- <code title="patch /saved_audiences/{saved_audience_id}">client.savedAudiences.<a href="./src/resources/saved-audiences.ts">update</a>(savedAudienceID, { ...params }) -> SavedAudienceUpdateResponse</code>

# Targeting

Types:

- <code><a href="./src/resources/targeting/targeting.ts">TargetingListCarriersResponse</a></code>
- <code><a href="./src/resources/targeting/targeting.ts">TargetingListDevicesResponse</a></code>
- <code><a href="./src/resources/targeting/targeting.ts">TargetingListGeolocationsResponse</a></code>
- <code><a href="./src/resources/targeting/targeting.ts">TargetingListInterestsResponse</a></code>
- <code><a href="./src/resources/targeting/targeting.ts">TargetingListThirdPartyAudiencesResponse</a></code>
- <code><a href="./src/resources/targeting/targeting.ts">TargetingValidateGeolocationsResponse</a></code>
- <code><a href="./src/resources/targeting/targeting.ts">TargetingValidateKeywordsResponse</a></code>

Methods:

- <code title="get /targeting/carriers">client.targeting.<a href="./src/resources/targeting/targeting.ts">listCarriers</a>({ ...params }) -> TargetingListCarriersResponse</code>
- <code title="get /targeting/devices">client.targeting.<a href="./src/resources/targeting/targeting.ts">listDevices</a>({ ...params }) -> TargetingListDevicesResponse</code>
- <code title="get /targeting/geolocations">client.targeting.<a href="./src/resources/targeting/targeting.ts">listGeolocations</a>({ ...params }) -> TargetingListGeolocationsResponse</code>
- <code title="get /targeting/interests">client.targeting.<a href="./src/resources/targeting/targeting.ts">listInterests</a>() -> TargetingListInterestsResponse</code>
- <code title="get /targeting/third_party_audiences">client.targeting.<a href="./src/resources/targeting/targeting.ts">listThirdPartyAudiences</a>({ ...params }) -> TargetingListThirdPartyAudiencesResponse</code>
- <code title="post /targeting/geolocations_validations">client.targeting.<a href="./src/resources/targeting/targeting.ts">validateGeolocations</a>({ ...params }) -> TargetingValidateGeolocationsResponse</code>
- <code title="post /targeting/keyword_validations">client.targeting.<a href="./src/resources/targeting/targeting.ts">validateKeywords</a>({ ...params }) -> TargetingValidateKeywordsResponse</code>

## Communities

Types:

- <code><a href="./src/resources/targeting/communities.ts">CommunityListCommunitiesResponse</a></code>
- <code><a href="./src/resources/targeting/communities.ts">CommunitySearchCommunitiesResponse</a></code>
- <code><a href="./src/resources/targeting/communities.ts">CommunitySuggestCommunitiesResponse</a></code>

Methods:

- <code title="get /targeting/communities">client.targeting.communities.<a href="./src/resources/targeting/communities.ts">listCommunities</a>({ ...params }) -> CommunityListCommunitiesResponse</code>
- <code title="get /targeting/communities/search">client.targeting.communities.<a href="./src/resources/targeting/communities.ts">searchCommunities</a>({ ...params }) -> CommunitySearchCommunitiesResponse</code>
- <code title="get /targeting/communities/suggestions">client.targeting.communities.<a href="./src/resources/targeting/communities.ts">suggestCommunities</a>({ ...params }) -> CommunitySuggestCommunitiesResponse</code>

# TimeZones

Types:

- <code><a href="./src/resources/time-zones.ts">TimeZoneListResponse</a></code>

Methods:

- <code title="get /time_zones">client.timeZones.<a href="./src/resources/time-zones.ts">list</a>({ ...params }) -> TimeZoneListResponse</code>
