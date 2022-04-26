import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AdminUser = {
  __typename?: 'AdminUser';
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type ComponentPageButton = {
  __typename?: 'ComponentPageButton';
  id: Scalars['ID'];
  label: Scalars['String'];
  url: Scalars['String'];
};

export type ComponentPageButtonInput = {
  label?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type ComponentPageConceptInput = {
  title: Scalars['String'];
};

export type ComponentPageConcepts = {
  __typename?: 'ComponentPageConcepts';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentPageHeader = {
  __typename?: 'ComponentPageHeader';
  button?: Maybe<ComponentPageButton>;
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  title: Scalars['String'];
};

export type ComponentPageHeaderInput = {
  button?: InputMaybe<ComponentPageButtonInput>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type ComponentPageModuleInput = {
  description: Scalars['String'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

export type ComponentPageModules = {
  __typename?: 'ComponentPageModules';
  description: Scalars['String'];
  id: Scalars['ID'];
  subTitle: Scalars['String'];
  title: Scalars['String'];
};

export type ComponentPagePrincingBox = {
  __typename?: 'ComponentPagePrincingBox';
  benefits: Scalars['String'];
  button?: Maybe<ComponentPageButton>;
  id: Scalars['ID'];
  numberInstallments: Scalars['Int'];
  priceInstallments: Scalars['Int'];
  totalPrice: Scalars['Int'];
};

export type ComponentPagePrincingBoxInput = {
  benefits?: InputMaybe<Scalars['String']>;
  button: ComponentPageButtonInput;
  numberInstallments: Scalars['Int'];
  priceInstallments: Scalars['Int'];
  totalPrice: Scalars['Int'];
};

export type ComponentPageQuestionInput = {
  answer: Scalars['String'];
  question: Scalars['String'];
};

export type ComponentPageQuestions = {
  __typename?: 'ComponentPageQuestions';
  answer: Scalars['String'];
  id: Scalars['ID'];
  question: Scalars['String'];
};

export type ComponentPageReviewInput = {
  name: Scalars['String'];
  photo?: InputMaybe<Scalars['ID']>;
  review: Scalars['String'];
};

export type ComponentPageReviews = {
  __typename?: 'ComponentPageReviews';
  id: Scalars['ID'];
  name: Scalars['String'];
  photo?: Maybe<UploadFile>;
  review: Scalars['String'];
};

export type ComponentPageSectionAboutProject = {
  __typename?: 'ComponentPageSectionAboutProject';
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  title: Scalars['String'];
};

export type ComponentPageSectionAboutProjectInput = {
  description: Scalars['String'];
  image?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type ComponentPageSectionAboutUs = {
  __typename?: 'ComponentPageSectionAboutUs';
  developers?: Maybe<Array<Maybe<Developers>>>;
  id: Scalars['ID'];
  title: Scalars['String'];
};


export type ComponentPageSectionAboutUsDevelopersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type ComponentPageSectionAboutUsInput = {
  developers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  title: Scalars['String'];
};

export type ComponentPageSectionAgenda = {
  __typename?: 'ComponentPageSectionAgenda';
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentPageSectionAgendumInput = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type ComponentPageSectionConceptInput = {
  concepts?: InputMaybe<Array<ComponentPageConceptInput>>;
  title: Scalars['String'];
};

export type ComponentPageSectionConcepts = {
  __typename?: 'ComponentPageSectionConcepts';
  concepts?: Maybe<Array<Maybe<ComponentPageConcepts>>>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentPageSectionFaq = {
  __typename?: 'ComponentPageSectionFaq';
  id: Scalars['ID'];
  questions?: Maybe<Array<Maybe<ComponentPageQuestions>>>;
  title: Scalars['String'];
};

export type ComponentPageSectionFaqInput = {
  questions?: InputMaybe<Array<ComponentPageQuestionInput>>;
  title: Scalars['String'];
};

export type ComponentPageSectionModuleInput = {
  title: Scalars['String'];
};

export type ComponentPageSectionModules = {
  __typename?: 'ComponentPageSectionModules';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type ComponentPageSectionReviewInput = {
  reviews?: InputMaybe<Array<ComponentPageReviewInput>>;
  title: Scalars['String'];
};

export type ComponentPageSectionReviews = {
  __typename?: 'ComponentPageSectionReviews';
  id: Scalars['ID'];
  reviews?: Maybe<Array<Maybe<ComponentPageReviews>>>;
  title: Scalars['String'];
};

export type ComponentPageSectionTech = {
  __typename?: 'ComponentPageSectionTech';
  id: Scalars['ID'];
  techIcons?: Maybe<Array<Maybe<ComponentPageTechIcons>>>;
  title: Scalars['String'];
};

export type ComponentPageSectionTechInput = {
  techIcons?: InputMaybe<Array<ComponentPageTechIconInput>>;
  title: Scalars['String'];
};

export type ComponentPageSocialLinkInput = {
  title?: InputMaybe<Enum_Componentpagesociallinks_Title>;
  url: Scalars['String'];
};

export type ComponentPageSocialLinks = {
  __typename?: 'ComponentPageSocialLinks';
  id: Scalars['ID'];
  title: Enum_Componentpagesociallinks_Title;
  url: Scalars['String'];
};

export type ComponentPageTechIconInput = {
  icon?: InputMaybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type ComponentPageTechIcons = {
  __typename?: 'ComponentPageTechIcons';
  icon?: Maybe<UploadFile>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type DeveloperInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description: Scalars['String'];
  image?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  role: Scalars['String'];
  socialLinks?: InputMaybe<Array<ComponentPageSocialLinkInput>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Developers = {
  __typename?: 'Developers';
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  name: Scalars['String'];
  role: Scalars['String'];
  socialLinks?: Maybe<Array<Maybe<ComponentPageSocialLinks>>>;
  updated_at: Scalars['DateTime'];
};

export type DevelopersAggregator = {
  __typename?: 'DevelopersAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type DevelopersConnection = {
  __typename?: 'DevelopersConnection';
  aggregate?: Maybe<DevelopersAggregator>;
  groupBy?: Maybe<DevelopersGroupBy>;
  values?: Maybe<Array<Maybe<Developers>>>;
};

export type DevelopersConnectionCreated_At = {
  __typename?: 'DevelopersConnectionCreated_at';
  connection?: Maybe<DevelopersConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DevelopersConnectionDescription = {
  __typename?: 'DevelopersConnectionDescription';
  connection?: Maybe<DevelopersConnection>;
  key?: Maybe<Scalars['String']>;
};

export type DevelopersConnectionId = {
  __typename?: 'DevelopersConnectionId';
  connection?: Maybe<DevelopersConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DevelopersConnectionImage = {
  __typename?: 'DevelopersConnectionImage';
  connection?: Maybe<DevelopersConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type DevelopersConnectionName = {
  __typename?: 'DevelopersConnectionName';
  connection?: Maybe<DevelopersConnection>;
  key?: Maybe<Scalars['String']>;
};

export type DevelopersConnectionRole = {
  __typename?: 'DevelopersConnectionRole';
  connection?: Maybe<DevelopersConnection>;
  key?: Maybe<Scalars['String']>;
};

export type DevelopersConnectionUpdated_At = {
  __typename?: 'DevelopersConnectionUpdated_at';
  connection?: Maybe<DevelopersConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type DevelopersGroupBy = {
  __typename?: 'DevelopersGroupBy';
  created_at?: Maybe<Array<Maybe<DevelopersConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<DevelopersConnectionDescription>>>;
  id?: Maybe<Array<Maybe<DevelopersConnectionId>>>;
  image?: Maybe<Array<Maybe<DevelopersConnectionImage>>>;
  name?: Maybe<Array<Maybe<DevelopersConnectionName>>>;
  role?: Maybe<Array<Maybe<DevelopersConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<DevelopersConnectionUpdated_At>>>;
};

export enum Enum_Componentpagesociallinks_Title {
  Dribble = 'Dribble',
  Facebook = 'Facebook',
  GitHub = 'GitHub',
  Linkedin = 'Linkedin',
  Twitter = 'Twitter'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type FileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: InputMaybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: InputMaybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: InputMaybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: InputMaybe<Scalars['Int']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type InputId = {
  id: Scalars['ID'];
};

export type LandingPage = {
  __typename?: 'LandingPage';
  created_at: Scalars['DateTime'];
  header?: Maybe<ComponentPageHeader>;
  id: Scalars['ID'];
  logo?: Maybe<UploadFile>;
  modules?: Maybe<Array<Maybe<ComponentPageModules>>>;
  princingBox?: Maybe<ComponentPagePrincingBox>;
  sectionAboutProject?: Maybe<ComponentPageSectionAboutProject>;
  sectionAboutUs?: Maybe<ComponentPageSectionAboutUs>;
  sectionAgenda?: Maybe<ComponentPageSectionAgenda>;
  sectionConcepts?: Maybe<ComponentPageSectionConcepts>;
  sectionFaq?: Maybe<ComponentPageSectionFaq>;
  sectionModules?: Maybe<ComponentPageSectionModules>;
  sectionReviews?: Maybe<ComponentPageSectionReviews>;
  sectionTech?: Maybe<ComponentPageSectionTech>;
  updated_at: Scalars['DateTime'];
};

export type LandingPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  header?: InputMaybe<ComponentPageHeaderInput>;
  logo?: InputMaybe<Scalars['ID']>;
  modules?: InputMaybe<Array<ComponentPageModuleInput>>;
  princingBox: ComponentPagePrincingBoxInput;
  sectionAboutProject?: InputMaybe<ComponentPageSectionAboutProjectInput>;
  sectionAboutUs?: InputMaybe<ComponentPageSectionAboutUsInput>;
  sectionAgenda: ComponentPageSectionAgendumInput;
  sectionConcepts?: InputMaybe<ComponentPageSectionConceptInput>;
  sectionFaq: ComponentPageSectionFaqInput;
  sectionModules: ComponentPageSectionModuleInput;
  sectionReviews: ComponentPageSectionReviewInput;
  sectionTech?: InputMaybe<ComponentPageSectionTechInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type LocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type Morph = ComponentPageButton | ComponentPageConcepts | ComponentPageHeader | ComponentPageModules | ComponentPagePrincingBox | ComponentPageQuestions | ComponentPageReviews | ComponentPageSectionAboutProject | ComponentPageSectionAboutUs | ComponentPageSectionAgenda | ComponentPageSectionConcepts | ComponentPageSectionFaq | ComponentPageSectionModules | ComponentPageSectionReviews | ComponentPageSectionTech | ComponentPageSocialLinks | ComponentPageTechIcons | Developers | DevelopersAggregator | DevelopersConnection | DevelopersConnectionCreated_At | DevelopersConnectionDescription | DevelopersConnectionId | DevelopersConnectionImage | DevelopersConnectionName | DevelopersConnectionRole | DevelopersConnectionUpdated_At | DevelopersGroupBy | I18NLocale | LandingPage | UploadFile | UploadFileAggregator | UploadFileAggregatorAvg | UploadFileAggregatorMax | UploadFileAggregatorMin | UploadFileAggregatorSum | UploadFileConnection | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionCreated_At | UploadFileConnectionExt | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionHeight | UploadFileConnectionId | UploadFileConnectionMime | UploadFileConnectionName | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionSize | UploadFileConnectionUpdated_At | UploadFileConnectionUrl | UploadFileConnectionWidth | UploadFileGroupBy | UserPermissionsPasswordPayload | UsersPermissionsLoginPayload | UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleAggregator | UsersPermissionsRoleConnection | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionType | UsersPermissionsRoleGroupBy | UsersPermissionsUser | UsersPermissionsUserAggregator | UsersPermissionsUserConnection | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserGroupBy | CreateDeveloperPayload | CreateRolePayload | CreateUserPayload | DeleteDeveloperPayload | DeleteFilePayload | DeleteLandingPagePayload | DeleteRolePayload | DeleteUserPayload | UpdateDeveloperPayload | UpdateLandingPagePayload | UpdateRolePayload | UpdateUserPayload;

export type Mutation = {
  __typename?: 'Mutation';
  createDeveloper?: Maybe<CreateDeveloperPayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  deleteDeveloper?: Maybe<DeleteDeveloperPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  deleteLandingPage?: Maybe<DeleteLandingPagePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFile>>;
  register: UsersPermissionsLoginPayload;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateDeveloper?: Maybe<UpdateDeveloperPayload>;
  updateFileInfo: UploadFile;
  updateLandingPage?: Maybe<UpdateLandingPagePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  upload: UploadFile;
};


export type MutationCreateDeveloperArgs = {
  input?: InputMaybe<CreateDeveloperInput>;
};


export type MutationCreateRoleArgs = {
  input?: InputMaybe<CreateRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: InputMaybe<CreateUserInput>;
};


export type MutationDeleteDeveloperArgs = {
  input?: InputMaybe<DeleteDeveloperInput>;
};


export type MutationDeleteFileArgs = {
  input?: InputMaybe<DeleteFileInput>;
};


export type MutationDeleteRoleArgs = {
  input?: InputMaybe<DeleteRoleInput>;
};


export type MutationDeleteUserArgs = {
  input?: InputMaybe<DeleteUserInput>;
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateDeveloperArgs = {
  input?: InputMaybe<UpdateDeveloperInput>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationUpdateLandingPageArgs = {
  input?: InputMaybe<UpdateLandingPageInput>;
};


export type MutationUpdateRoleArgs = {
  input?: InputMaybe<UpdateRoleInput>;
};


export type MutationUpdateUserArgs = {
  input?: InputMaybe<UpdateUserInput>;
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']>;
  refId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<Scalars['String']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  developer?: Maybe<Developers>;
  developers?: Maybe<Array<Maybe<Developers>>>;
  developersConnection?: Maybe<DevelopersConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  landingPage?: Maybe<LandingPage>;
  me?: Maybe<UsersPermissionsMe>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
};


export type QueryDeveloperArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryDevelopersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryDevelopersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryLandingPageArgs = {
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryRolesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: InputMaybe<PublicationState>;
};


export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type RoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type UploadFileRelatedArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<UploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<UploadFileAggregatorMax>;
  min?: Maybe<UploadFileAggregatorMin>;
  sum?: Maybe<UploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<UploadFileAggregator>;
  groupBy?: Maybe<UploadFileGroupBy>;
  values?: Maybe<Array<Maybe<UploadFile>>>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<UploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
};

export type UserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username: Scalars['String'];
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  type: Scalars['String'];
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<UsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<UsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
};

export type CreateDeveloperInput = {
  data?: InputMaybe<DeveloperInput>;
};

export type CreateDeveloperPayload = {
  __typename?: 'createDeveloperPayload';
  developer?: Maybe<Developers>;
};

export type CreateRoleInput = {
  data?: InputMaybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type CreateUserInput = {
  data?: InputMaybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteDeveloperInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteDeveloperPayload = {
  __typename?: 'deleteDeveloperPayload';
  developer?: Maybe<Developers>;
};

export type DeleteFileInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type DeleteLandingPagePayload = {
  __typename?: 'deleteLandingPagePayload';
  landingPage?: Maybe<LandingPage>;
};

export type DeleteRoleInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteUserInput = {
  where?: InputMaybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type EditComponentPageButtonInput = {
  id?: InputMaybe<Scalars['ID']>;
  label?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageConceptInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageHeaderInput = {
  button?: InputMaybe<EditComponentPageButtonInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageModuleInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  subTitle?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPagePrincingBoxInput = {
  benefits?: InputMaybe<Scalars['String']>;
  button?: InputMaybe<EditComponentPageButtonInput>;
  id?: InputMaybe<Scalars['ID']>;
  numberInstallments?: InputMaybe<Scalars['Int']>;
  priceInstallments?: InputMaybe<Scalars['Int']>;
  totalPrice?: InputMaybe<Scalars['Int']>;
};

export type EditComponentPageQuestionInput = {
  answer?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  question?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageReviewInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  photo?: InputMaybe<Scalars['ID']>;
  review?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageSectionAboutProjectInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  image?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageSectionAboutUsInput = {
  developers?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageSectionAgendumInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageSectionConceptInput = {
  concepts?: InputMaybe<Array<InputMaybe<EditComponentPageConceptInput>>>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageSectionFaqInput = {
  id?: InputMaybe<Scalars['ID']>;
  questions?: InputMaybe<Array<InputMaybe<EditComponentPageQuestionInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageSectionModuleInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageSectionReviewInput = {
  id?: InputMaybe<Scalars['ID']>;
  reviews?: InputMaybe<Array<InputMaybe<EditComponentPageReviewInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageSectionTechInput = {
  id?: InputMaybe<Scalars['ID']>;
  techIcons?: InputMaybe<Array<InputMaybe<EditComponentPageTechIconInput>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageSocialLinkInput = {
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Enum_Componentpagesociallinks_Title>;
  url?: InputMaybe<Scalars['String']>;
};

export type EditComponentPageTechIconInput = {
  icon?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  title?: InputMaybe<Scalars['String']>;
};

export type EditDeveloperInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['String']>;
  socialLinks?: InputMaybe<Array<InputMaybe<EditComponentPageSocialLinkInput>>>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditFileInput = {
  alternativeText?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  ext?: InputMaybe<Scalars['String']>;
  formats?: InputMaybe<Scalars['JSON']>;
  hash?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  mime?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  previewUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  provider_metadata?: InputMaybe<Scalars['JSON']>;
  related?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  size?: InputMaybe<Scalars['Float']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type EditLandingPageInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  header?: InputMaybe<EditComponentPageHeaderInput>;
  logo?: InputMaybe<Scalars['ID']>;
  modules?: InputMaybe<Array<InputMaybe<EditComponentPageModuleInput>>>;
  princingBox?: InputMaybe<EditComponentPagePrincingBoxInput>;
  sectionAboutProject?: InputMaybe<EditComponentPageSectionAboutProjectInput>;
  sectionAboutUs?: InputMaybe<EditComponentPageSectionAboutUsInput>;
  sectionAgenda?: InputMaybe<EditComponentPageSectionAgendumInput>;
  sectionConcepts?: InputMaybe<EditComponentPageSectionConceptInput>;
  sectionFaq?: InputMaybe<EditComponentPageSectionFaqInput>;
  sectionModules?: InputMaybe<EditComponentPageSectionModuleInput>;
  sectionReviews?: InputMaybe<EditComponentPageSectionReviewInput>;
  sectionTech?: InputMaybe<EditComponentPageSectionTechInput>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditLocaleInput = {
  code?: InputMaybe<Scalars['String']>;
  created_by?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
};

export type EditRoleInput = {
  created_by?: InputMaybe<Scalars['ID']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type?: InputMaybe<Scalars['String']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type EditUserInput = {
  blocked?: InputMaybe<Scalars['Boolean']>;
  confirmationToken?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  created_by?: InputMaybe<Scalars['ID']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Scalars['ID']>;
  updated_by?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type UpdateDeveloperInput = {
  data?: InputMaybe<EditDeveloperInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateDeveloperPayload = {
  __typename?: 'updateDeveloperPayload';
  developer?: Maybe<Developers>;
};

export type UpdateLandingPageInput = {
  data?: InputMaybe<EditLandingPageInput>;
};

export type UpdateLandingPagePayload = {
  __typename?: 'updateLandingPagePayload';
  landingPage?: Maybe<LandingPage>;
};

export type UpdateRoleInput = {
  data?: InputMaybe<EditRoleInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateUserInput = {
  data?: InputMaybe<EditUserInput>;
  where?: InputMaybe<InputId>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type QueryDevelopersQueryVariables = Exact<{ [key: string]: never; }>;


export type QueryDevelopersQuery = { __typename?: 'Query', developers?: Array<{ __typename?: 'Developers', id: string, name: string, role: string, description: string, image?: { __typename?: 'UploadFile', id: string, name: string, url: string } | null, socialLinks?: Array<{ __typename?: 'ComponentPageSocialLinks', id: string, title: Enum_Componentpagesociallinks_Title, url: string } | null> | null } | null> | null };


export const QueryDevelopersDocument = gql`
    query QueryDevelopers {
  developers {
    id
    image {
      id
      name
      url
    }
    name
    role
    socialLinks {
      id
      title
      url
    }
    description
  }
}
    `;

/**
 * __useQueryDevelopersQuery__
 *
 * To run a query within a React component, call `useQueryDevelopersQuery` and pass it any options that fit your needs.
 * When your component renders, `useQueryDevelopersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQueryDevelopersQuery({
 *   variables: {
 *   },
 * });
 */
export function useQueryDevelopersQuery(baseOptions?: Apollo.QueryHookOptions<QueryDevelopersQuery, QueryDevelopersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<QueryDevelopersQuery, QueryDevelopersQueryVariables>(QueryDevelopersDocument, options);
      }
export function useQueryDevelopersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<QueryDevelopersQuery, QueryDevelopersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<QueryDevelopersQuery, QueryDevelopersQueryVariables>(QueryDevelopersDocument, options);
        }
export type QueryDevelopersQueryHookResult = ReturnType<typeof useQueryDevelopersQuery>;
export type QueryDevelopersLazyQueryHookResult = ReturnType<typeof useQueryDevelopersLazyQuery>;
export type QueryDevelopersQueryResult = Apollo.QueryResult<QueryDevelopersQuery, QueryDevelopersQueryVariables>;