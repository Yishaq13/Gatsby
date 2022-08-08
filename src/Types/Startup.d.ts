import USP from "./StartupUsp";
import { File } from "./File";
import { User } from "./User";
import { StartupContactDTO } from "./StartupContact";
import { StartupOpportunity } from "./Opportunity.d";
import { Industry } from "./Industry.d";
import UseCase from "./UseCase";

export interface Startup {
  id: number;
  dateCreated: Date;
  name: string;
  dateFounded: Date;
  employees: string;
  legalEntity: string;
  mainContact: StartupContactDTO;
  mainContactId: number;
  address: string;
  additionalContacts: StartupContactDTO[];
  website: string;
  referenceCustomers: string;
  shortDescription: string;
  description: string;
  usps: USP[];
  technologyReadiness: string;
  investors: string;
  currentInvestmentStage: string;
  totalFunding: number | null;
  lastFundingDate: Date | null;
  lastFunding: number | null;
  pricingModel: string | null;
  files: File[];
  billingCountry: string;
  billingCity: string;
  billingStreet: string;
  billingPostalCode: string;
  billingState: string;
  fundingIsUndisclosed: boolean;
  lastModifiedById: number;
  lastModifiedDate: Date;
  lastModifiedBy: User;
  opportunities: StartupOpportunity[];
  industries: Industry[];
  useCases: UseCase[];
}

export interface StartupDTO
  extends Omit<Startup, ["dateCreated", "dateFounded", "lastModifiedDate"]> {
  dateCreated: string;
  dateFounded: string;
  lastModifiedDate: string;
}

export interface CreateStartupDTO
  extends Omit<
    Startup,
    [
      "id",
      "dateCreated",
      "dateFounded",
      "usps",
      "technologyReadiness",
      "mainContactId"
    ]
  > {
  dateFounded: string;
  technologyReadiness: string | null;
}

export interface StartupFilterCriteria {
  currentInvestmentStage?: string;
  employees?: string;
}

export interface StartupContactsAssociation {
  id: number;
  name: string;
}
