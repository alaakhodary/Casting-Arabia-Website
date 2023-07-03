export interface IPropPostValues {
  id?: number;
  title: string;
  company: string;
  productionPersonnel: string[];
  productionDescription: string;
  locations?: string[];
  expirationDate?: string;
  coverImage?: string;
  createdBy?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: any;
  deletedBy?: any;
  userId?: number;
  status?: string;
  country?: any;
  roles?: (Role | Roles2 | Roles3)[];
  user?: User;
  submissionsStats?: SubmissionsStats;
}

export interface SubmissionsStats {
  pending: number;
  accepted: number;
  declined: number;
  hired: number;
  scheduled: number;
}

interface User {
  id: number;
  referralCode: string;
  referralBy?: any;
  uuid: string;
  status: string;
  talentTypesDetails: string;
  otherTalentType: string;
  freezeAccountByUser: boolean;
  name: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  dob?: any;
  maxAge?: any;
  minAge?: any;
  isAboveXYear?: any;
  country: string;
  city?: any;
  role: string;
  gender: string;
  isActive: boolean;
  linkedInId?: any;
  facebookId?: any;
  appleId?: any;
  avatar?: any;
  pendingAvatar?: any;
  avatarStatus?: any;
  licenseId: string;
  licenseIdStatus: string;
  attributes: Attributes;
  driverLicense?: any;
  unionMembership?: any;
  citizenship?: any;
  accountLevel: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  deletedBy?: any;
  expireAt?: any;
}

interface Attributes {
  eyes: string;
  hair: string;
  weight: string;
  height: string;
}

interface Roles3 {
  id: number;
  talentType: string;
  otherTalentType?: string;
  type: string;
  otherRoleType?: string;
  name: string;
  isAcceptingTapedAudition?: boolean;
  gender: string;
  maxAge?: number;
  minAge?: number;
  citizenship?: string;
  considerCitizen: boolean;
  description?: string;
  location?: string;
  locationList?: any[];
  auditionDates?: string[];
  shootingAvailability?: string[];
  isPaid?: boolean;
  paidType?: any;
  paidRate?: any;
  paidHourRate?: any;
  mediaRequired: MediaRequired;
  coverImage: string;
  status: string;
  isCompleted: boolean;
  opportunityId: number;
  userId: number;
  deletedAt?: any;
  skills: Skill2[];
}

interface Roles2 {
  id: number;
  talentType: string;
  otherTalentType?: any;
  type: string;
  otherRoleType?: any;
  name: string;
  isAcceptingTapedAudition?: any;
  gender: string;
  maxAge?: any;
  minAge?: any;
  citizenship?: any;
  considerCitizen: boolean;
  description?: any;
  location?: any;
  locationList?: any;
  auditionDates?: any;
  shootingAvailability?: any;
  isPaid?: any;
  paidType?: any;
  paidRate?: any;
  paidHourRate?: any;
  mediaRequired: MediaRequired;
  coverImage: string;
  status: string;
  isCompleted: boolean;
  opportunityId: number;
  userId: number;
  deletedAt?: any;
  skills: any[];
}

interface Role {
  id: number;
  talentType: string;
  otherTalentType: string;
  type: string;
  otherRoleType: string;
  name: string;
  isAcceptingTapedAudition: boolean;
  gender: string;
  maxAge: number;
  minAge: number;
  citizenship: string;
  considerCitizen: boolean;
  description: string;
  location: string;
  locationList: string[];
  auditionDates: string[];
  shootingAvailability: string[];
  isPaid: boolean;
  paidType?: any;
  paidRate?: any;
  paidHourRate?: any;
  mediaRequired: MediaRequired;
  coverImage: string;
  status: string;
  isCompleted: boolean;
  opportunityId: number;
  userId: number;
  deletedAt?: any;
  skills: Skill2[];
}

interface Skill2 {
  id: number;
  roleId: number;
  skillId: number;
  level: string;
  skill: Skill;
}

interface Skill {
  id: number;
  title: string;
  title__ar: string;
}

interface MediaRequired {
  characteristics: boolean;
  skills: boolean;
}
