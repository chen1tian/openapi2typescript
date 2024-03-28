declare namespace relMgr {
  type ActionApiDescriptionModel = {
    uniqueName?: string;
    name?: string;
    httpMethod?: string;
    url?: string;
    supportedVersions?: string[];
    parametersOnMethod?: MethodParameterApiDescriptionModel[];
    parameters?: ParameterApiDescriptionModel[];
    returnValue?: ReturnValueApiDescriptionModel;
    allowAnonymous?: boolean;
    implementFrom?: string;
  };

  type ApplicationApiDescriptionModel = {
    modules?: Record<string, any>;
    types?: Record<string, any>;
  };

  type ApplicationAuthConfigurationDto = {
    grantedPolicies?: Record<string, any>;
  };

  type ApplicationConfigurationDto = {
    localization?: ApplicationLocalizationConfigurationDto;
    auth?: ApplicationAuthConfigurationDto;
    setting?: ApplicationSettingConfigurationDto;
    currentUser?: CurrentUserDto;
    features?: ApplicationFeatureConfigurationDto;
    globalFeatures?: ApplicationGlobalFeatureConfigurationDto;
    multiTenancy?: MultiTenancyInfoDto;
    currentTenant?: CurrentTenantDto;
    timing?: TimingDto;
    clock?: ClockDto;
    objectExtensions?: ObjectExtensionsDto;
    extraProperties?: Record<string, any>;
  };

  type ApplicationFeatureConfigurationDto = {
    values?: Record<string, any>;
  };

  type ApplicationGlobalFeatureConfigurationDto = {
    enabledFeatures?: string[];
  };

  type ApplicationLocalizationConfigurationDto = {
    values?: Record<string, any>;
    resources?: Record<string, any>;
    languages?: LanguageInfo[];
    currentCulture?: CurrentCultureDto;
    defaultResourceName?: string;
    languagesMap?: Record<string, any>;
    languageFilesMap?: Record<string, any>;
  };

  type ApplicationLocalizationDto = {
    resources?: Record<string, any>;
  };

  type ApplicationLocalizationResourceDto = {
    texts?: Record<string, any>;
    baseResources?: string[];
  };

  type ApplicationSettingConfigurationDto = {
    values?: Record<string, any>;
  };

  type ClockDto = {
    kind?: string;
  };

  type ControllerApiDescriptionModel = {
    controllerName?: string;
    controllerGroupName?: string;
    isRemoteService?: boolean;
    isIntegrationService?: boolean;
    apiVersion?: string;
    type?: string;
    interfaces?: ControllerInterfaceApiDescriptionModel[];
    actions?: Record<string, any>;
  };

  type ControllerInterfaceApiDescriptionModel = {
    type?: string;
    name?: string;
    methods?: InterfaceMethodApiDescriptionModel[];
  };

  type CurrentCultureDto = {
    displayName?: string;
    englishName?: string;
    threeLetterIsoLanguageName?: string;
    twoLetterIsoLanguageName?: string;
    isRightToLeft?: boolean;
    cultureName?: string;
    name?: string;
    nativeName?: string;
    dateTimeFormat?: DateTimeFormatDto;
  };

  type CurrentTenantDto = {
    id?: string;
    name?: string;
    isAvailable?: boolean;
  };

  type CurrentUserDto = {
    isAuthenticated?: boolean;
    id?: string;
    tenantId?: string;
    impersonatorUserId?: string;
    impersonatorTenantId?: string;
    impersonatorUserName?: string;
    impersonatorTenantName?: string;
    userName?: string;
    name?: string;
    surName?: string;
    email?: string;
    emailVerified?: boolean;
    phoneNumber?: string;
    phoneNumberVerified?: boolean;
    roles?: string[];
  };

  type DateTimeFormatDto = {
    calendarAlgorithmType?: string;
    dateTimeFormatLong?: string;
    shortDatePattern?: string;
    fullDateTimePattern?: string;
    dateSeparator?: string;
    shortTimePattern?: string;
    longTimePattern?: string;
  };

  type deleteAppProjectIdParams = {
    id: string;
  };

  type deleteAppReleaseIdParams = {
    id: string;
  };

  type deleteAppSoftwareIdParams = {
    id: string;
  };

  type EntityExtensionDto = {
    properties?: Record<string, any>;
    configuration?: Record<string, any>;
  };

  type ExtensionEnumDto = {
    fields?: ExtensionEnumFieldDto[];
    localizationResource?: string;
  };

  type ExtensionEnumFieldDto = {
    name?: string;
    value?: any;
  };

  type ExtensionPropertyApiCreateDto = {
    isAvailable?: boolean;
  };

  type ExtensionPropertyApiDto = {
    onGet?: ExtensionPropertyApiGetDto;
    onCreate?: ExtensionPropertyApiCreateDto;
    onUpdate?: ExtensionPropertyApiUpdateDto;
  };

  type ExtensionPropertyApiGetDto = {
    isAvailable?: boolean;
  };

  type ExtensionPropertyApiUpdateDto = {
    isAvailable?: boolean;
  };

  type ExtensionPropertyAttributeDto = {
    typeSimple?: string;
    config?: Record<string, any>;
  };

  type ExtensionPropertyDto = {
    type?: string;
    typeSimple?: string;
    displayName?: LocalizableStringDto;
    api?: ExtensionPropertyApiDto;
    ui?: ExtensionPropertyUiDto;
    attributes?: ExtensionPropertyAttributeDto[];
    configuration?: Record<string, any>;
    defaultValue?: any;
  };

  type ExtensionPropertyUiDto = {
    onTable?: ExtensionPropertyUiTableDto;
    onCreateForm?: ExtensionPropertyUiFormDto;
    onEditForm?: ExtensionPropertyUiFormDto;
    lookup?: ExtensionPropertyUiLookupDto;
  };

  type ExtensionPropertyUiFormDto = {
    isVisible?: boolean;
  };

  type ExtensionPropertyUiLookupDto = {
    url?: string;
    resultListPropertyName?: string;
    displayPropertyName?: string;
    valuePropertyName?: string;
    filterParamName?: string;
  };

  type ExtensionPropertyUiTableDto = {
    isVisible?: boolean;
  };

  type getAbpApiDefinitionParams = {
    IncludeTypes?: boolean;
  };

  type getAbpApplicationConfigurationParams = {
    IncludeLocalizationResources?: boolean;
  };

  type getAbpApplicationLocalizationParams = {
    CultureName: string;
    OnlyDynamics?: boolean;
  };

  type getAppProjectIdParams = {
    id: string;
  };

  type getAppProjectParams = {
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  };

  type getAppReleaseIdParams = {
    id: string;
  };

  type getAppReleaseParams = {
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  };

  type getAppSoftwareIdParams = {
    id: string;
  };

  type getAppSoftwareParams = {
    Sorting?: string;
    SkipCount?: number;
    MaxResultCount?: number;
  };

  type IanaTimeZone = {
    timeZoneName?: string;
  };

  type InterfaceMethodApiDescriptionModel = {
    name?: string;
    parametersOnMethod?: MethodParameterApiDescriptionModel[];
    returnValue?: ReturnValueApiDescriptionModel;
  };

  type LanguageInfo = {
    cultureName?: string;
    uiCultureName?: string;
    displayName?: string;
    twoLetterISOLanguageName?: string;
    flagIcon?: string;
  };

  type LocalizableStringDto = {
    name?: string;
    resource?: string;
  };

  type MethodParameterApiDescriptionModel = {
    name?: string;
    typeAsString?: string;
    type?: string;
    typeSimple?: string;
    isOptional?: boolean;
    defaultValue?: any;
  };

  type ModuleApiDescriptionModel = {
    rootPath?: string;
    remoteServiceName?: string;
    controllers?: Record<string, any>;
  };

  type ModuleExtensionDto = {
    entities?: Record<string, any>;
    configuration?: Record<string, any>;
  };

  type MultiTenancyInfoDto = {
    isEnabled?: boolean;
  };

  type NameValue = {
    name?: string;
    value?: string;
  };

  type ObjectExtensionsDto = {
    modules?: Record<string, any>;
    enums?: Record<string, any>;
  };

  type PagedResultDto<ProjectDto> = {
    items?: ProjectDto[];
    totalCount?: number;
  };

  type PagedResultDto<ReleaseDto> = {
    items?: ReleaseDto[];
    totalCount?: number;
  };

  type PagedResultDto<SoftwareDto> = {
    items?: SoftwareDto[];
    totalCount?: number;
  };

  type ParameterApiDescriptionModel = {
    nameOnMethod?: string;
    name?: string;
    jsonName?: string;
    type?: string;
    typeSimple?: string;
    isOptional?: boolean;
    defaultValue?: any;
    constraintTypes?: string[];
    bindingSourceId?: string;
    descriptorName?: string;
  };

  type ProjectDto = {
    id?: string;
    /** 名称 */
    name?: string;
    /** 说明 */
    desc?: string;
  };

  type PropertyApiDescriptionModel = {
    name?: string;
    jsonName?: string;
    type?: string;
    typeSimple?: string;
    isRequired?: boolean;
    minLength?: number;
    maxLength?: number;
    minimum?: string;
    maximum?: string;
    regex?: string;
  };

  type putAppProjectIdParams = {
    id: string;
  };

  type putAppReleaseIdParams = {
    id: string;
  };

  type putAppSoftwareIdParams = {
    id: string;
  };

  type ReleaseDto = {
    id?: string;
    /** 名称 */
    name: string;
    /** 说明 */
    desc?: string;
    /** 版本 */
    version: string;
    /** 版本号，用于比较版本大小 */
    versionCode?: number;
    /** 文件路径 */
    filePath?: string;
    /** 软件Id */
    softwareId?: string;
    software?: SoftwareDto;
  };

  type RemoteServiceErrorInfo = {
    code?: string;
    message?: string;
    details?: string;
    data?: Record<string, any>;
    validationErrors?: RemoteServiceValidationErrorInfo[];
  };

  type RemoteServiceErrorResponse = {
    error?: RemoteServiceErrorInfo;
  };

  type RemoteServiceValidationErrorInfo = {
    message?: string;
    members?: string[];
  };

  type ReturnValueApiDescriptionModel = {
    type?: string;
    typeSimple?: string;
  };

  type SoftwareDto = {
    id?: string;
    /** 名称 */
    name: string;
    /** 说明 */
    desc: string;
    /** 软件图标 */
    logo?: string;
    /** 项目Id */
    projectId?: string;
    /** 当前发布Id */
    currentReleaseId?: string;
    project?: ProjectDto;
    currentRelease?: ReleaseDto;
  };

  type TimeZone = {
    iana?: IanaTimeZone;
    windows?: WindowsTimeZone;
  };

  type TimingDto = {
    timeZone?: TimeZone;
  };

  type TypeApiDescriptionModel = {
    baseType?: string;
    isEnum?: boolean;
    enumNames?: string[];
    enumValues?: any[];
    genericArguments?: string[];
    properties?: PropertyApiDescriptionModel[];
  };

  type WindowsTimeZone = {
    timeZoneId?: string;
  };
}
