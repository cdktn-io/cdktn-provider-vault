/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface LdapAuthBackendConfig extends cdktn.TerraformMetaArguments {
  /**
  * The metadata to be tied to generated entity alias.
  *   This should be a list or map containing the metadata in key value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#alias_metadata LdapAuthBackend#alias_metadata}
  */
  readonly aliasMetadata?: { [key: string]: string };
  /**
  * Allows anonymous group searches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#anonymous_group_search LdapAuthBackend#anonymous_group_search}
  */
  readonly anonymousGroupSearch?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#binddn LdapAuthBackend#binddn}
  */
  readonly binddn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#bindpass LdapAuthBackend#bindpass}
  */
  readonly bindpass?: string;
  /**
  * Write-only bind password to use for LDAP authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#bindpass_wo LdapAuthBackend#bindpass_wo}
  */
  readonly bindpassWo?: string;
  /**
  * Version counter for write-only bind password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#bindpass_wo_version LdapAuthBackend#bindpass_wo_version}
  */
  readonly bindpassWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#case_sensitive_names LdapAuthBackend#case_sensitive_names}
  */
  readonly caseSensitiveNames?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#certificate LdapAuthBackend#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#client_tls_cert LdapAuthBackend#client_tls_cert}
  */
  readonly clientTlsCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#client_tls_key LdapAuthBackend#client_tls_key}
  */
  readonly clientTlsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#connection_timeout LdapAuthBackend#connection_timeout}
  */
  readonly connectionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#deny_null_bind LdapAuthBackend#deny_null_bind}
  */
  readonly denyNullBind?: boolean | cdktn.IResolvable;
  /**
  * Specifies how aliases are dereferenced during LDAP searches. Valid values are 'never','searching','finding', and 'always'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#dereference_aliases LdapAuthBackend#dereference_aliases}
  */
  readonly dereferenceAliases?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#description LdapAuthBackend#description}
  */
  readonly description?: string;
  /**
  * Stops rotation of the root credential until set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#disable_automated_rotation LdapAuthBackend#disable_automated_rotation}
  */
  readonly disableAutomatedRotation?: boolean | cdktn.IResolvable;
  /**
  * If set, opts out of mount migration on path updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#disable_remount LdapAuthBackend#disable_remount}
  */
  readonly disableRemount?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#discoverdn LdapAuthBackend#discoverdn}
  */
  readonly discoverdn?: boolean | cdktn.IResolvable;
  /**
  * Enables login using the sAMAccountName attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#enable_samaccountname_login LdapAuthBackend#enable_samaccountname_login}
  */
  readonly enableSamaccountnameLogin?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#groupattr LdapAuthBackend#groupattr}
  */
  readonly groupattr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#groupdn LdapAuthBackend#groupdn}
  */
  readonly groupdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#groupfilter LdapAuthBackend#groupfilter}
  */
  readonly groupfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#id LdapAuthBackend#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#insecure_tls LdapAuthBackend#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktn.IResolvable;
  /**
  * Specifies if the auth method is local only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#local LdapAuthBackend#local}
  */
  readonly local?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#max_page_size LdapAuthBackend#max_page_size}
  */
  readonly maxPageSize?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#namespace LdapAuthBackend#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#path LdapAuthBackend#path}
  */
  readonly path?: string;
  /**
  * The timeout(in sec) for requests to the LDAP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#request_timeout LdapAuthBackend#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * The period of time in seconds between each rotation of the root credential. Cannot be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#rotation_period LdapAuthBackend#rotation_period}
  */
  readonly rotationPeriod?: number;
  /**
  * The cron-style schedule for the root credential to be rotated on. Cannot be used with rotation_period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#rotation_schedule LdapAuthBackend#rotation_schedule}
  */
  readonly rotationSchedule?: string;
  /**
  * The maximum amount of time in seconds Vault is allowed to complete a rotation once a scheduled rotation is triggered. Can only be used with rotation_schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#rotation_window LdapAuthBackend#rotation_window}
  */
  readonly rotationWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#starttls LdapAuthBackend#starttls}
  */
  readonly starttls?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#tls_max_version LdapAuthBackend#tls_max_version}
  */
  readonly tlsMaxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#tls_min_version LdapAuthBackend#tls_min_version}
  */
  readonly tlsMinVersion?: string;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_bound_cidrs LdapAuthBackend#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_explicit_max_ttl LdapAuthBackend#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_max_ttl LdapAuthBackend#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_no_default_policy LdapAuthBackend#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktn.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_num_uses LdapAuthBackend#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_period LdapAuthBackend#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_policies LdapAuthBackend#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_ttl LdapAuthBackend#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}
  */
  readonly tokenType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#tune LdapAuthBackend#tune}
  */
  readonly tune?: LdapAuthBackendTune[] | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#upndomain LdapAuthBackend#upndomain}
  */
  readonly upndomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#url LdapAuthBackend#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#use_token_groups LdapAuthBackend#use_token_groups}
  */
  readonly useTokenGroups?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#userattr LdapAuthBackend#userattr}
  */
  readonly userattr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#userdn LdapAuthBackend#userdn}
  */
  readonly userdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#userfilter LdapAuthBackend#userfilter}
  */
  readonly userfilter?: string;
  /**
  * Force the auth method to use the username passed by the user as the alias name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#username_as_alias LdapAuthBackend#username_as_alias}
  */
  readonly usernameAsAlias?: boolean | cdktn.IResolvable;
}
export interface LdapAuthBackendTune {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#allowed_response_headers LdapAuthBackend#allowed_response_headers}
  */
  readonly allowedResponseHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#audit_non_hmac_request_keys LdapAuthBackend#audit_non_hmac_request_keys}
  */
  readonly auditNonHmacRequestKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#audit_non_hmac_response_keys LdapAuthBackend#audit_non_hmac_response_keys}
  */
  readonly auditNonHmacResponseKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#default_lease_ttl LdapAuthBackend#default_lease_ttl}
  */
  readonly defaultLeaseTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#listing_visibility LdapAuthBackend#listing_visibility}
  */
  readonly listingVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#max_lease_ttl LdapAuthBackend#max_lease_ttl}
  */
  readonly maxLeaseTtl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#passthrough_request_headers LdapAuthBackend#passthrough_request_headers}
  */
  readonly passthroughRequestHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#token_type LdapAuthBackend#token_type}
  */
  readonly tokenType?: string;
}

export function ldapAuthBackendTuneToTerraform(struct?: LdapAuthBackendTune | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_response_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedResponseHeaders),
    audit_non_hmac_request_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.auditNonHmacRequestKeys),
    audit_non_hmac_response_keys: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.auditNonHmacResponseKeys),
    default_lease_ttl: cdktn.stringToTerraform(struct!.defaultLeaseTtl),
    listing_visibility: cdktn.stringToTerraform(struct!.listingVisibility),
    max_lease_ttl: cdktn.stringToTerraform(struct!.maxLeaseTtl),
    passthrough_request_headers: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.passthroughRequestHeaders),
    token_type: cdktn.stringToTerraform(struct!.tokenType),
  }
}


export function ldapAuthBackendTuneToHclTerraform(struct?: LdapAuthBackendTune | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_response_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedResponseHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audit_non_hmac_request_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.auditNonHmacRequestKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    audit_non_hmac_response_keys: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.auditNonHmacResponseKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    default_lease_ttl: {
      value: cdktn.stringToHclTerraform(struct!.defaultLeaseTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    listing_visibility: {
      value: cdktn.stringToHclTerraform(struct!.listingVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_lease_ttl: {
      value: cdktn.stringToHclTerraform(struct!.maxLeaseTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passthrough_request_headers: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.passthroughRequestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_type: {
      value: cdktn.stringToHclTerraform(struct!.tokenType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LdapAuthBackendTuneOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): LdapAuthBackendTune | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedResponseHeaders = this._allowedResponseHeaders;
    }
    if (this._auditNonHmacRequestKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditNonHmacRequestKeys = this._auditNonHmacRequestKeys;
    }
    if (this._auditNonHmacResponseKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditNonHmacResponseKeys = this._auditNonHmacResponseKeys;
    }
    if (this._defaultLeaseTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLeaseTtl = this._defaultLeaseTtl;
    }
    if (this._listingVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.listingVisibility = this._listingVisibility;
    }
    if (this._maxLeaseTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLeaseTtl = this._maxLeaseTtl;
    }
    if (this._passthroughRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthroughRequestHeaders = this._passthroughRequestHeaders;
    }
    if (this._tokenType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenType = this._tokenType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LdapAuthBackendTune | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedResponseHeaders = undefined;
      this._auditNonHmacRequestKeys = undefined;
      this._auditNonHmacResponseKeys = undefined;
      this._defaultLeaseTtl = undefined;
      this._listingVisibility = undefined;
      this._maxLeaseTtl = undefined;
      this._passthroughRequestHeaders = undefined;
      this._tokenType = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedResponseHeaders = value.allowedResponseHeaders;
      this._auditNonHmacRequestKeys = value.auditNonHmacRequestKeys;
      this._auditNonHmacResponseKeys = value.auditNonHmacResponseKeys;
      this._defaultLeaseTtl = value.defaultLeaseTtl;
      this._listingVisibility = value.listingVisibility;
      this._maxLeaseTtl = value.maxLeaseTtl;
      this._passthroughRequestHeaders = value.passthroughRequestHeaders;
      this._tokenType = value.tokenType;
    }
  }

  // allowed_response_headers - computed: true, optional: true, required: false
  private _allowedResponseHeaders?: string[]; 
  public get allowedResponseHeaders() {
    return this.getListAttribute('allowed_response_headers');
  }
  public set allowedResponseHeaders(value: string[]) {
    this._allowedResponseHeaders = value;
  }
  public resetAllowedResponseHeaders() {
    this._allowedResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedResponseHeadersInput() {
    return this._allowedResponseHeaders;
  }

  // audit_non_hmac_request_keys - computed: true, optional: true, required: false
  private _auditNonHmacRequestKeys?: string[]; 
  public get auditNonHmacRequestKeys() {
    return this.getListAttribute('audit_non_hmac_request_keys');
  }
  public set auditNonHmacRequestKeys(value: string[]) {
    this._auditNonHmacRequestKeys = value;
  }
  public resetAuditNonHmacRequestKeys() {
    this._auditNonHmacRequestKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacRequestKeysInput() {
    return this._auditNonHmacRequestKeys;
  }

  // audit_non_hmac_response_keys - computed: true, optional: true, required: false
  private _auditNonHmacResponseKeys?: string[]; 
  public get auditNonHmacResponseKeys() {
    return this.getListAttribute('audit_non_hmac_response_keys');
  }
  public set auditNonHmacResponseKeys(value: string[]) {
    this._auditNonHmacResponseKeys = value;
  }
  public resetAuditNonHmacResponseKeys() {
    this._auditNonHmacResponseKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditNonHmacResponseKeysInput() {
    return this._auditNonHmacResponseKeys;
  }

  // default_lease_ttl - computed: true, optional: true, required: false
  private _defaultLeaseTtl?: string; 
  public get defaultLeaseTtl() {
    return this.getStringAttribute('default_lease_ttl');
  }
  public set defaultLeaseTtl(value: string) {
    this._defaultLeaseTtl = value;
  }
  public resetDefaultLeaseTtl() {
    this._defaultLeaseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLeaseTtlInput() {
    return this._defaultLeaseTtl;
  }

  // listing_visibility - computed: true, optional: true, required: false
  private _listingVisibility?: string; 
  public get listingVisibility() {
    return this.getStringAttribute('listing_visibility');
  }
  public set listingVisibility(value: string) {
    this._listingVisibility = value;
  }
  public resetListingVisibility() {
    this._listingVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listingVisibilityInput() {
    return this._listingVisibility;
  }

  // max_lease_ttl - computed: true, optional: true, required: false
  private _maxLeaseTtl?: string; 
  public get maxLeaseTtl() {
    return this.getStringAttribute('max_lease_ttl');
  }
  public set maxLeaseTtl(value: string) {
    this._maxLeaseTtl = value;
  }
  public resetMaxLeaseTtl() {
    this._maxLeaseTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLeaseTtlInput() {
    return this._maxLeaseTtl;
  }

  // passthrough_request_headers - computed: true, optional: true, required: false
  private _passthroughRequestHeaders?: string[]; 
  public get passthroughRequestHeaders() {
    return this.getListAttribute('passthrough_request_headers');
  }
  public set passthroughRequestHeaders(value: string[]) {
    this._passthroughRequestHeaders = value;
  }
  public resetPassthroughRequestHeaders() {
    this._passthroughRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughRequestHeadersInput() {
    return this._passthroughRequestHeaders;
  }

  // token_type - computed: true, optional: true, required: false
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  public resetTokenType() {
    this._tokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }
}

export class LdapAuthBackendTuneList extends cdktn.ComplexList {
  public internalValue? : LdapAuthBackendTune[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktn.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): LdapAuthBackendTuneOutputReference {
    return new LdapAuthBackendTuneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend vault_ldap_auth_backend}
*/
export class LdapAuthBackend extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_ldap_auth_backend";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a LdapAuthBackend resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LdapAuthBackend to import
  * @param importFromId The id of the existing LdapAuthBackend that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LdapAuthBackend to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_ldap_auth_backend", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/ldap_auth_backend vault_ldap_auth_backend} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LdapAuthBackendConfig
  */
  public constructor(scope: Construct, id: string, config: LdapAuthBackendConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_ldap_auth_backend',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.7.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliasMetadata = config.aliasMetadata;
    this._anonymousGroupSearch = config.anonymousGroupSearch;
    this._binddn = config.binddn;
    this._bindpass = config.bindpass;
    this._bindpassWo = config.bindpassWo;
    this._bindpassWoVersion = config.bindpassWoVersion;
    this._caseSensitiveNames = config.caseSensitiveNames;
    this._certificate = config.certificate;
    this._clientTlsCert = config.clientTlsCert;
    this._clientTlsKey = config.clientTlsKey;
    this._connectionTimeout = config.connectionTimeout;
    this._denyNullBind = config.denyNullBind;
    this._dereferenceAliases = config.dereferenceAliases;
    this._description = config.description;
    this._disableAutomatedRotation = config.disableAutomatedRotation;
    this._disableRemount = config.disableRemount;
    this._discoverdn = config.discoverdn;
    this._enableSamaccountnameLogin = config.enableSamaccountnameLogin;
    this._groupattr = config.groupattr;
    this._groupdn = config.groupdn;
    this._groupfilter = config.groupfilter;
    this._id = config.id;
    this._insecureTls = config.insecureTls;
    this._local = config.local;
    this._maxPageSize = config.maxPageSize;
    this._namespace = config.namespace;
    this._path = config.path;
    this._requestTimeout = config.requestTimeout;
    this._rotationPeriod = config.rotationPeriod;
    this._rotationSchedule = config.rotationSchedule;
    this._rotationWindow = config.rotationWindow;
    this._starttls = config.starttls;
    this._tlsMaxVersion = config.tlsMaxVersion;
    this._tlsMinVersion = config.tlsMinVersion;
    this._tokenBoundCidrs = config.tokenBoundCidrs;
    this._tokenExplicitMaxTtl = config.tokenExplicitMaxTtl;
    this._tokenMaxTtl = config.tokenMaxTtl;
    this._tokenNoDefaultPolicy = config.tokenNoDefaultPolicy;
    this._tokenNumUses = config.tokenNumUses;
    this._tokenPeriod = config.tokenPeriod;
    this._tokenPolicies = config.tokenPolicies;
    this._tokenTtl = config.tokenTtl;
    this._tokenType = config.tokenType;
    this._tune.internalValue = config.tune;
    this._upndomain = config.upndomain;
    this._url = config.url;
    this._useTokenGroups = config.useTokenGroups;
    this._userattr = config.userattr;
    this._userdn = config.userdn;
    this._userfilter = config.userfilter;
    this._usernameAsAlias = config.usernameAsAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // alias_metadata - computed: false, optional: true, required: false
  private _aliasMetadata?: { [key: string]: string }; 
  public get aliasMetadata() {
    return this.getStringMapAttribute('alias_metadata');
  }
  public set aliasMetadata(value: { [key: string]: string }) {
    this._aliasMetadata = value;
  }
  public resetAliasMetadata() {
    this._aliasMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasMetadataInput() {
    return this._aliasMetadata;
  }

  // anonymous_group_search - computed: true, optional: true, required: false
  private _anonymousGroupSearch?: boolean | cdktn.IResolvable; 
  public get anonymousGroupSearch() {
    return this.getBooleanAttribute('anonymous_group_search');
  }
  public set anonymousGroupSearch(value: boolean | cdktn.IResolvable) {
    this._anonymousGroupSearch = value;
  }
  public resetAnonymousGroupSearch() {
    this._anonymousGroupSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousGroupSearchInput() {
    return this._anonymousGroupSearch;
  }

  // binddn - computed: true, optional: true, required: false
  private _binddn?: string; 
  public get binddn() {
    return this.getStringAttribute('binddn');
  }
  public set binddn(value: string) {
    this._binddn = value;
  }
  public resetBinddn() {
    this._binddn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binddnInput() {
    return this._binddn;
  }

  // bindpass - computed: true, optional: true, required: false
  private _bindpass?: string; 
  public get bindpass() {
    return this.getStringAttribute('bindpass');
  }
  public set bindpass(value: string) {
    this._bindpass = value;
  }
  public resetBindpass() {
    this._bindpass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpassInput() {
    return this._bindpass;
  }

  // bindpass_wo - computed: false, optional: true, required: false
  private _bindpassWo?: string; 
  public get bindpassWo() {
    return this.getStringAttribute('bindpass_wo');
  }
  public set bindpassWo(value: string) {
    this._bindpassWo = value;
  }
  public resetBindpassWo() {
    this._bindpassWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpassWoInput() {
    return this._bindpassWo;
  }

  // bindpass_wo_version - computed: false, optional: true, required: false
  private _bindpassWoVersion?: number; 
  public get bindpassWoVersion() {
    return this.getNumberAttribute('bindpass_wo_version');
  }
  public set bindpassWoVersion(value: number) {
    this._bindpassWoVersion = value;
  }
  public resetBindpassWoVersion() {
    this._bindpassWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindpassWoVersionInput() {
    return this._bindpassWoVersion;
  }

  // case_sensitive_names - computed: true, optional: true, required: false
  private _caseSensitiveNames?: boolean | cdktn.IResolvable; 
  public get caseSensitiveNames() {
    return this.getBooleanAttribute('case_sensitive_names');
  }
  public set caseSensitiveNames(value: boolean | cdktn.IResolvable) {
    this._caseSensitiveNames = value;
  }
  public resetCaseSensitiveNames() {
    this._caseSensitiveNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveNamesInput() {
    return this._caseSensitiveNames;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // client_tls_cert - computed: true, optional: true, required: false
  private _clientTlsCert?: string; 
  public get clientTlsCert() {
    return this.getStringAttribute('client_tls_cert');
  }
  public set clientTlsCert(value: string) {
    this._clientTlsCert = value;
  }
  public resetClientTlsCert() {
    this._clientTlsCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsCertInput() {
    return this._clientTlsCert;
  }

  // client_tls_key - computed: true, optional: true, required: false
  private _clientTlsKey?: string; 
  public get clientTlsKey() {
    return this.getStringAttribute('client_tls_key');
  }
  public set clientTlsKey(value: string) {
    this._clientTlsKey = value;
  }
  public resetClientTlsKey() {
    this._clientTlsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTlsKeyInput() {
    return this._clientTlsKey;
  }

  // connection_timeout - computed: true, optional: true, required: false
  private _connectionTimeout?: number; 
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }
  public set connectionTimeout(value: number) {
    this._connectionTimeout = value;
  }
  public resetConnectionTimeout() {
    this._connectionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTimeoutInput() {
    return this._connectionTimeout;
  }

  // deny_null_bind - computed: true, optional: true, required: false
  private _denyNullBind?: boolean | cdktn.IResolvable; 
  public get denyNullBind() {
    return this.getBooleanAttribute('deny_null_bind');
  }
  public set denyNullBind(value: boolean | cdktn.IResolvable) {
    this._denyNullBind = value;
  }
  public resetDenyNullBind() {
    this._denyNullBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyNullBindInput() {
    return this._denyNullBind;
  }

  // dereference_aliases - computed: true, optional: true, required: false
  private _dereferenceAliases?: string; 
  public get dereferenceAliases() {
    return this.getStringAttribute('dereference_aliases');
  }
  public set dereferenceAliases(value: string) {
    this._dereferenceAliases = value;
  }
  public resetDereferenceAliases() {
    this._dereferenceAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dereferenceAliasesInput() {
    return this._dereferenceAliases;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // disable_automated_rotation - computed: false, optional: true, required: false
  private _disableAutomatedRotation?: boolean | cdktn.IResolvable; 
  public get disableAutomatedRotation() {
    return this.getBooleanAttribute('disable_automated_rotation');
  }
  public set disableAutomatedRotation(value: boolean | cdktn.IResolvable) {
    this._disableAutomatedRotation = value;
  }
  public resetDisableAutomatedRotation() {
    this._disableAutomatedRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAutomatedRotationInput() {
    return this._disableAutomatedRotation;
  }

  // disable_remount - computed: false, optional: true, required: false
  private _disableRemount?: boolean | cdktn.IResolvable; 
  public get disableRemount() {
    return this.getBooleanAttribute('disable_remount');
  }
  public set disableRemount(value: boolean | cdktn.IResolvable) {
    this._disableRemount = value;
  }
  public resetDisableRemount() {
    this._disableRemount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRemountInput() {
    return this._disableRemount;
  }

  // discoverdn - computed: true, optional: true, required: false
  private _discoverdn?: boolean | cdktn.IResolvable; 
  public get discoverdn() {
    return this.getBooleanAttribute('discoverdn');
  }
  public set discoverdn(value: boolean | cdktn.IResolvable) {
    this._discoverdn = value;
  }
  public resetDiscoverdn() {
    this._discoverdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverdnInput() {
    return this._discoverdn;
  }

  // enable_samaccountname_login - computed: true, optional: true, required: false
  private _enableSamaccountnameLogin?: boolean | cdktn.IResolvable; 
  public get enableSamaccountnameLogin() {
    return this.getBooleanAttribute('enable_samaccountname_login');
  }
  public set enableSamaccountnameLogin(value: boolean | cdktn.IResolvable) {
    this._enableSamaccountnameLogin = value;
  }
  public resetEnableSamaccountnameLogin() {
    this._enableSamaccountnameLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSamaccountnameLoginInput() {
    return this._enableSamaccountnameLogin;
  }

  // groupattr - computed: true, optional: true, required: false
  private _groupattr?: string; 
  public get groupattr() {
    return this.getStringAttribute('groupattr');
  }
  public set groupattr(value: string) {
    this._groupattr = value;
  }
  public resetGroupattr() {
    this._groupattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupattrInput() {
    return this._groupattr;
  }

  // groupdn - computed: true, optional: true, required: false
  private _groupdn?: string; 
  public get groupdn() {
    return this.getStringAttribute('groupdn');
  }
  public set groupdn(value: string) {
    this._groupdn = value;
  }
  public resetGroupdn() {
    this._groupdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupdnInput() {
    return this._groupdn;
  }

  // groupfilter - computed: true, optional: true, required: false
  private _groupfilter?: string; 
  public get groupfilter() {
    return this.getStringAttribute('groupfilter');
  }
  public set groupfilter(value: string) {
    this._groupfilter = value;
  }
  public resetGroupfilter() {
    this._groupfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupfilterInput() {
    return this._groupfilter;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // insecure_tls - computed: true, optional: true, required: false
  private _insecureTls?: boolean | cdktn.IResolvable; 
  public get insecureTls() {
    return this.getBooleanAttribute('insecure_tls');
  }
  public set insecureTls(value: boolean | cdktn.IResolvable) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
  }

  // local - computed: false, optional: true, required: false
  private _local?: boolean | cdktn.IResolvable; 
  public get local() {
    return this.getBooleanAttribute('local');
  }
  public set local(value: boolean | cdktn.IResolvable) {
    this._local = value;
  }
  public resetLocal() {
    this._local = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local;
  }

  // max_page_size - computed: false, optional: true, required: false
  private _maxPageSize?: number; 
  public get maxPageSize() {
    return this.getNumberAttribute('max_page_size');
  }
  public set maxPageSize(value: number) {
    this._maxPageSize = value;
  }
  public resetMaxPageSize() {
    this._maxPageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPageSizeInput() {
    return this._maxPageSize;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // request_timeout - computed: true, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: number; 
  public get rotationPeriod() {
    return this.getNumberAttribute('rotation_period');
  }
  public set rotationPeriod(value: number) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // rotation_schedule - computed: false, optional: true, required: false
  private _rotationSchedule?: string; 
  public get rotationSchedule() {
    return this.getStringAttribute('rotation_schedule');
  }
  public set rotationSchedule(value: string) {
    this._rotationSchedule = value;
  }
  public resetRotationSchedule() {
    this._rotationSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationScheduleInput() {
    return this._rotationSchedule;
  }

  // rotation_window - computed: false, optional: true, required: false
  private _rotationWindow?: number; 
  public get rotationWindow() {
    return this.getNumberAttribute('rotation_window');
  }
  public set rotationWindow(value: number) {
    this._rotationWindow = value;
  }
  public resetRotationWindow() {
    this._rotationWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationWindowInput() {
    return this._rotationWindow;
  }

  // starttls - computed: true, optional: true, required: false
  private _starttls?: boolean | cdktn.IResolvable; 
  public get starttls() {
    return this.getBooleanAttribute('starttls');
  }
  public set starttls(value: boolean | cdktn.IResolvable) {
    this._starttls = value;
  }
  public resetStarttls() {
    this._starttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttlsInput() {
    return this._starttls;
  }

  // tls_max_version - computed: true, optional: true, required: false
  private _tlsMaxVersion?: string; 
  public get tlsMaxVersion() {
    return this.getStringAttribute('tls_max_version');
  }
  public set tlsMaxVersion(value: string) {
    this._tlsMaxVersion = value;
  }
  public resetTlsMaxVersion() {
    this._tlsMaxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMaxVersionInput() {
    return this._tlsMaxVersion;
  }

  // tls_min_version - computed: true, optional: true, required: false
  private _tlsMinVersion?: string; 
  public get tlsMinVersion() {
    return this.getStringAttribute('tls_min_version');
  }
  public set tlsMinVersion(value: string) {
    this._tlsMinVersion = value;
  }
  public resetTlsMinVersion() {
    this._tlsMinVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsMinVersionInput() {
    return this._tlsMinVersion;
  }

  // token_bound_cidrs - computed: false, optional: true, required: false
  private _tokenBoundCidrs?: string[]; 
  public get tokenBoundCidrs() {
    return cdktn.Fn.tolist(this.getListAttribute('token_bound_cidrs'));
  }
  public set tokenBoundCidrs(value: string[]) {
    this._tokenBoundCidrs = value;
  }
  public resetTokenBoundCidrs() {
    this._tokenBoundCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenBoundCidrsInput() {
    return this._tokenBoundCidrs;
  }

  // token_explicit_max_ttl - computed: false, optional: true, required: false
  private _tokenExplicitMaxTtl?: number; 
  public get tokenExplicitMaxTtl() {
    return this.getNumberAttribute('token_explicit_max_ttl');
  }
  public set tokenExplicitMaxTtl(value: number) {
    this._tokenExplicitMaxTtl = value;
  }
  public resetTokenExplicitMaxTtl() {
    this._tokenExplicitMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExplicitMaxTtlInput() {
    return this._tokenExplicitMaxTtl;
  }

  // token_max_ttl - computed: false, optional: true, required: false
  private _tokenMaxTtl?: number; 
  public get tokenMaxTtl() {
    return this.getNumberAttribute('token_max_ttl');
  }
  public set tokenMaxTtl(value: number) {
    this._tokenMaxTtl = value;
  }
  public resetTokenMaxTtl() {
    this._tokenMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenMaxTtlInput() {
    return this._tokenMaxTtl;
  }

  // token_no_default_policy - computed: false, optional: true, required: false
  private _tokenNoDefaultPolicy?: boolean | cdktn.IResolvable; 
  public get tokenNoDefaultPolicy() {
    return this.getBooleanAttribute('token_no_default_policy');
  }
  public set tokenNoDefaultPolicy(value: boolean | cdktn.IResolvable) {
    this._tokenNoDefaultPolicy = value;
  }
  public resetTokenNoDefaultPolicy() {
    this._tokenNoDefaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNoDefaultPolicyInput() {
    return this._tokenNoDefaultPolicy;
  }

  // token_num_uses - computed: false, optional: true, required: false
  private _tokenNumUses?: number; 
  public get tokenNumUses() {
    return this.getNumberAttribute('token_num_uses');
  }
  public set tokenNumUses(value: number) {
    this._tokenNumUses = value;
  }
  public resetTokenNumUses() {
    this._tokenNumUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNumUsesInput() {
    return this._tokenNumUses;
  }

  // token_period - computed: false, optional: true, required: false
  private _tokenPeriod?: number; 
  public get tokenPeriod() {
    return this.getNumberAttribute('token_period');
  }
  public set tokenPeriod(value: number) {
    this._tokenPeriod = value;
  }
  public resetTokenPeriod() {
    this._tokenPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPeriodInput() {
    return this._tokenPeriod;
  }

  // token_policies - computed: false, optional: true, required: false
  private _tokenPolicies?: string[]; 
  public get tokenPolicies() {
    return cdktn.Fn.tolist(this.getListAttribute('token_policies'));
  }
  public set tokenPolicies(value: string[]) {
    this._tokenPolicies = value;
  }
  public resetTokenPolicies() {
    this._tokenPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPoliciesInput() {
    return this._tokenPolicies;
  }

  // token_ttl - computed: false, optional: true, required: false
  private _tokenTtl?: number; 
  public get tokenTtl() {
    return this.getNumberAttribute('token_ttl');
  }
  public set tokenTtl(value: number) {
    this._tokenTtl = value;
  }
  public resetTokenTtl() {
    this._tokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTtlInput() {
    return this._tokenTtl;
  }

  // token_type - computed: false, optional: true, required: false
  private _tokenType?: string; 
  public get tokenType() {
    return this.getStringAttribute('token_type');
  }
  public set tokenType(value: string) {
    this._tokenType = value;
  }
  public resetTokenType() {
    this._tokenType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenTypeInput() {
    return this._tokenType;
  }

  // tune - computed: true, optional: true, required: false
  private _tune = new LdapAuthBackendTuneList(this, "tune", false);
  public get tune() {
    return this._tune;
  }
  public putTune(value: LdapAuthBackendTune[] | cdktn.IResolvable) {
    this._tune.internalValue = value;
  }
  public resetTune() {
    this._tune.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tuneInput() {
    return this._tune.internalValue;
  }

  // upndomain - computed: true, optional: true, required: false
  private _upndomain?: string; 
  public get upndomain() {
    return this.getStringAttribute('upndomain');
  }
  public set upndomain(value: string) {
    this._upndomain = value;
  }
  public resetUpndomain() {
    this._upndomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upndomainInput() {
    return this._upndomain;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_token_groups - computed: true, optional: true, required: false
  private _useTokenGroups?: boolean | cdktn.IResolvable; 
  public get useTokenGroups() {
    return this.getBooleanAttribute('use_token_groups');
  }
  public set useTokenGroups(value: boolean | cdktn.IResolvable) {
    this._useTokenGroups = value;
  }
  public resetUseTokenGroups() {
    this._useTokenGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTokenGroupsInput() {
    return this._useTokenGroups;
  }

  // userattr - computed: true, optional: true, required: false
  private _userattr?: string; 
  public get userattr() {
    return this.getStringAttribute('userattr');
  }
  public set userattr(value: string) {
    this._userattr = value;
  }
  public resetUserattr() {
    this._userattr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userattrInput() {
    return this._userattr;
  }

  // userdn - computed: true, optional: true, required: false
  private _userdn?: string; 
  public get userdn() {
    return this.getStringAttribute('userdn');
  }
  public set userdn(value: string) {
    this._userdn = value;
  }
  public resetUserdn() {
    this._userdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdnInput() {
    return this._userdn;
  }

  // userfilter - computed: true, optional: true, required: false
  private _userfilter?: string; 
  public get userfilter() {
    return this.getStringAttribute('userfilter');
  }
  public set userfilter(value: string) {
    this._userfilter = value;
  }
  public resetUserfilter() {
    this._userfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userfilterInput() {
    return this._userfilter;
  }

  // username_as_alias - computed: true, optional: true, required: false
  private _usernameAsAlias?: boolean | cdktn.IResolvable; 
  public get usernameAsAlias() {
    return this.getBooleanAttribute('username_as_alias');
  }
  public set usernameAsAlias(value: boolean | cdktn.IResolvable) {
    this._usernameAsAlias = value;
  }
  public resetUsernameAsAlias() {
    this._usernameAsAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameAsAliasInput() {
    return this._usernameAsAlias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._aliasMetadata),
      anonymous_group_search: cdktn.booleanToTerraform(this._anonymousGroupSearch),
      binddn: cdktn.stringToTerraform(this._binddn),
      bindpass: cdktn.stringToTerraform(this._bindpass),
      bindpass_wo: cdktn.stringToTerraform(this._bindpassWo),
      bindpass_wo_version: cdktn.numberToTerraform(this._bindpassWoVersion),
      case_sensitive_names: cdktn.booleanToTerraform(this._caseSensitiveNames),
      certificate: cdktn.stringToTerraform(this._certificate),
      client_tls_cert: cdktn.stringToTerraform(this._clientTlsCert),
      client_tls_key: cdktn.stringToTerraform(this._clientTlsKey),
      connection_timeout: cdktn.numberToTerraform(this._connectionTimeout),
      deny_null_bind: cdktn.booleanToTerraform(this._denyNullBind),
      dereference_aliases: cdktn.stringToTerraform(this._dereferenceAliases),
      description: cdktn.stringToTerraform(this._description),
      disable_automated_rotation: cdktn.booleanToTerraform(this._disableAutomatedRotation),
      disable_remount: cdktn.booleanToTerraform(this._disableRemount),
      discoverdn: cdktn.booleanToTerraform(this._discoverdn),
      enable_samaccountname_login: cdktn.booleanToTerraform(this._enableSamaccountnameLogin),
      groupattr: cdktn.stringToTerraform(this._groupattr),
      groupdn: cdktn.stringToTerraform(this._groupdn),
      groupfilter: cdktn.stringToTerraform(this._groupfilter),
      id: cdktn.stringToTerraform(this._id),
      insecure_tls: cdktn.booleanToTerraform(this._insecureTls),
      local: cdktn.booleanToTerraform(this._local),
      max_page_size: cdktn.numberToTerraform(this._maxPageSize),
      namespace: cdktn.stringToTerraform(this._namespace),
      path: cdktn.stringToTerraform(this._path),
      request_timeout: cdktn.numberToTerraform(this._requestTimeout),
      rotation_period: cdktn.numberToTerraform(this._rotationPeriod),
      rotation_schedule: cdktn.stringToTerraform(this._rotationSchedule),
      rotation_window: cdktn.numberToTerraform(this._rotationWindow),
      starttls: cdktn.booleanToTerraform(this._starttls),
      tls_max_version: cdktn.stringToTerraform(this._tlsMaxVersion),
      tls_min_version: cdktn.stringToTerraform(this._tlsMinVersion),
      token_bound_cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenBoundCidrs),
      token_explicit_max_ttl: cdktn.numberToTerraform(this._tokenExplicitMaxTtl),
      token_max_ttl: cdktn.numberToTerraform(this._tokenMaxTtl),
      token_no_default_policy: cdktn.booleanToTerraform(this._tokenNoDefaultPolicy),
      token_num_uses: cdktn.numberToTerraform(this._tokenNumUses),
      token_period: cdktn.numberToTerraform(this._tokenPeriod),
      token_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenPolicies),
      token_ttl: cdktn.numberToTerraform(this._tokenTtl),
      token_type: cdktn.stringToTerraform(this._tokenType),
      tune: cdktn.listMapper(ldapAuthBackendTuneToTerraform, false)(this._tune.internalValue),
      upndomain: cdktn.stringToTerraform(this._upndomain),
      url: cdktn.stringToTerraform(this._url),
      use_token_groups: cdktn.booleanToTerraform(this._useTokenGroups),
      userattr: cdktn.stringToTerraform(this._userattr),
      userdn: cdktn.stringToTerraform(this._userdn),
      userfilter: cdktn.stringToTerraform(this._userfilter),
      username_as_alias: cdktn.booleanToTerraform(this._usernameAsAlias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias_metadata: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._aliasMetadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      anonymous_group_search: {
        value: cdktn.booleanToHclTerraform(this._anonymousGroupSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      binddn: {
        value: cdktn.stringToHclTerraform(this._binddn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindpass: {
        value: cdktn.stringToHclTerraform(this._bindpass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindpass_wo: {
        value: cdktn.stringToHclTerraform(this._bindpassWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bindpass_wo_version: {
        value: cdktn.numberToHclTerraform(this._bindpassWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      case_sensitive_names: {
        value: cdktn.booleanToHclTerraform(this._caseSensitiveNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      certificate: {
        value: cdktn.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_cert: {
        value: cdktn.stringToHclTerraform(this._clientTlsCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_tls_key: {
        value: cdktn.stringToHclTerraform(this._clientTlsKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_timeout: {
        value: cdktn.numberToHclTerraform(this._connectionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deny_null_bind: {
        value: cdktn.booleanToHclTerraform(this._denyNullBind),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dereference_aliases: {
        value: cdktn.stringToHclTerraform(this._dereferenceAliases),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktn.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_automated_rotation: {
        value: cdktn.booleanToHclTerraform(this._disableAutomatedRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_remount: {
        value: cdktn.booleanToHclTerraform(this._disableRemount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      discoverdn: {
        value: cdktn.booleanToHclTerraform(this._discoverdn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_samaccountname_login: {
        value: cdktn.booleanToHclTerraform(this._enableSamaccountnameLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groupattr: {
        value: cdktn.stringToHclTerraform(this._groupattr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupdn: {
        value: cdktn.stringToHclTerraform(this._groupdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupfilter: {
        value: cdktn.stringToHclTerraform(this._groupfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_tls: {
        value: cdktn.booleanToHclTerraform(this._insecureTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local: {
        value: cdktn.booleanToHclTerraform(this._local),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_page_size: {
        value: cdktn.numberToHclTerraform(this._maxPageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout: {
        value: cdktn.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotation_period: {
        value: cdktn.numberToHclTerraform(this._rotationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rotation_schedule: {
        value: cdktn.stringToHclTerraform(this._rotationSchedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_window: {
        value: cdktn.numberToHclTerraform(this._rotationWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      starttls: {
        value: cdktn.booleanToHclTerraform(this._starttls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tls_max_version: {
        value: cdktn.stringToHclTerraform(this._tlsMaxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_min_version: {
        value: cdktn.stringToHclTerraform(this._tlsMinVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_bound_cidrs: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tokenBoundCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_explicit_max_ttl: {
        value: cdktn.numberToHclTerraform(this._tokenExplicitMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_max_ttl: {
        value: cdktn.numberToHclTerraform(this._tokenMaxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_no_default_policy: {
        value: cdktn.booleanToHclTerraform(this._tokenNoDefaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_num_uses: {
        value: cdktn.numberToHclTerraform(this._tokenNumUses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_period: {
        value: cdktn.numberToHclTerraform(this._tokenPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_policies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._tokenPolicies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_ttl: {
        value: cdktn.numberToHclTerraform(this._tokenTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_type: {
        value: cdktn.stringToHclTerraform(this._tokenType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tune: {
        value: cdktn.listMapperHcl(ldapAuthBackendTuneToHclTerraform, false)(this._tune.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LdapAuthBackendTuneList",
      },
      upndomain: {
        value: cdktn.stringToHclTerraform(this._upndomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktn.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_token_groups: {
        value: cdktn.booleanToHclTerraform(this._useTokenGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      userattr: {
        value: cdktn.stringToHclTerraform(this._userattr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userdn: {
        value: cdktn.stringToHclTerraform(this._userdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      userfilter: {
        value: cdktn.stringToHclTerraform(this._userfilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_as_alias: {
        value: cdktn.booleanToHclTerraform(this._usernameAsAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
