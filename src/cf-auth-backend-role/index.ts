/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CfAuthBackendRoleConfig extends cdktn.TerraformMetaArguments {
  /**
  * A map of string to string that will be set as metadata on the identity alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#alias_metadata CfAuthBackendRole#alias_metadata}
  */
  readonly aliasMetadata?: { [key: string]: string };
  /**
  * An optional set of application IDs an instance must be a member of to qualify for this role. To clear this constraint, omit the field entirely rather than setting it to an empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_application_ids CfAuthBackendRole#bound_application_ids}
  */
  readonly boundApplicationIds?: string[];
  /**
  * An optional set of instance IDs an instance must be a member of to qualify for this role. To clear this constraint, omit the field entirely rather than setting it to an empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_instance_ids CfAuthBackendRole#bound_instance_ids}
  */
  readonly boundInstanceIds?: string[];
  /**
  * An optional set of organization IDs an instance must be a member of to qualify for this role. To clear this constraint, omit the field entirely rather than setting it to an empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_organization_ids CfAuthBackendRole#bound_organization_ids}
  */
  readonly boundOrganizationIds?: string[];
  /**
  * An optional set of space IDs an instance must be a member of to qualify for this role. To clear this constraint, omit the field entirely rather than setting it to an empty list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#bound_space_ids CfAuthBackendRole#bound_space_ids}
  */
  readonly boundSpaceIds?: string[];
  /**
  * If set to `true`, disables the default behavior that logging in must be performed from an acceptable IP address described by the presented certificate. Defaults to `false`. To reset to the default, omit this field from config rather than setting it to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#disable_ip_matching CfAuthBackendRole#disable_ip_matching}
  */
  readonly disableIpMatching?: boolean | cdktn.IResolvable;
  /**
  * Mount path for the CF auth engine in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#mount CfAuthBackendRole#mount}
  */
  readonly mount: string;
  /**
  * Name of the CF auth role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#name CfAuthBackendRole#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#namespace CfAuthBackendRole#namespace}
  */
  readonly namespace?: string;
  /**
  * Specifies the blocks of IP addresses which are allowed to use the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_bound_cidrs CfAuthBackendRole#token_bound_cidrs}
  */
  readonly tokenBoundCidrs?: string[];
  /**
  * Generated Token's Explicit Maximum TTL in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_explicit_max_ttl CfAuthBackendRole#token_explicit_max_ttl}
  */
  readonly tokenExplicitMaxTtl?: number;
  /**
  * The maximum lifetime of the generated token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_max_ttl CfAuthBackendRole#token_max_ttl}
  */
  readonly tokenMaxTtl?: number;
  /**
  * If true, the 'default' policy will not automatically be added to generated tokens
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_no_default_policy CfAuthBackendRole#token_no_default_policy}
  */
  readonly tokenNoDefaultPolicy?: boolean | cdktn.IResolvable;
  /**
  * The maximum number of times a token may be used, a value of zero means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_num_uses CfAuthBackendRole#token_num_uses}
  */
  readonly tokenNumUses?: number;
  /**
  * Generated Token's Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_period CfAuthBackendRole#token_period}
  */
  readonly tokenPeriod?: number;
  /**
  * Generated Token's Policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_policies CfAuthBackendRole#token_policies}
  */
  readonly tokenPolicies?: string[];
  /**
  * The initial ttl of the token to generate in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_ttl CfAuthBackendRole#token_ttl}
  */
  readonly tokenTtl?: number;
  /**
  * The type of token to generate, service or batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#token_type CfAuthBackendRole#token_type}
  */
  readonly tokenType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role vault_cf_auth_backend_role}
*/
export class CfAuthBackendRole extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_cf_auth_backend_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CfAuthBackendRole resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfAuthBackendRole to import
  * @param importFromId The id of the existing CfAuthBackendRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfAuthBackendRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_cf_auth_backend_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.8.0/docs/resources/cf_auth_backend_role vault_cf_auth_backend_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfAuthBackendRoleConfig
  */
  public constructor(scope: Construct, id: string, config: CfAuthBackendRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_cf_auth_backend_role',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.8.0',
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
    this._boundApplicationIds = config.boundApplicationIds;
    this._boundInstanceIds = config.boundInstanceIds;
    this._boundOrganizationIds = config.boundOrganizationIds;
    this._boundSpaceIds = config.boundSpaceIds;
    this._disableIpMatching = config.disableIpMatching;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._tokenBoundCidrs = config.tokenBoundCidrs;
    this._tokenExplicitMaxTtl = config.tokenExplicitMaxTtl;
    this._tokenMaxTtl = config.tokenMaxTtl;
    this._tokenNoDefaultPolicy = config.tokenNoDefaultPolicy;
    this._tokenNumUses = config.tokenNumUses;
    this._tokenPeriod = config.tokenPeriod;
    this._tokenPolicies = config.tokenPolicies;
    this._tokenTtl = config.tokenTtl;
    this._tokenType = config.tokenType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // bound_application_ids - computed: false, optional: true, required: false
  private _boundApplicationIds?: string[]; 
  public get boundApplicationIds() {
    return cdktn.Fn.tolist(this.getListAttribute('bound_application_ids'));
  }
  public set boundApplicationIds(value: string[]) {
    this._boundApplicationIds = value;
  }
  public resetBoundApplicationIds() {
    this._boundApplicationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundApplicationIdsInput() {
    return this._boundApplicationIds;
  }

  // bound_instance_ids - computed: false, optional: true, required: false
  private _boundInstanceIds?: string[]; 
  public get boundInstanceIds() {
    return cdktn.Fn.tolist(this.getListAttribute('bound_instance_ids'));
  }
  public set boundInstanceIds(value: string[]) {
    this._boundInstanceIds = value;
  }
  public resetBoundInstanceIds() {
    this._boundInstanceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundInstanceIdsInput() {
    return this._boundInstanceIds;
  }

  // bound_organization_ids - computed: false, optional: true, required: false
  private _boundOrganizationIds?: string[]; 
  public get boundOrganizationIds() {
    return cdktn.Fn.tolist(this.getListAttribute('bound_organization_ids'));
  }
  public set boundOrganizationIds(value: string[]) {
    this._boundOrganizationIds = value;
  }
  public resetBoundOrganizationIds() {
    this._boundOrganizationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundOrganizationIdsInput() {
    return this._boundOrganizationIds;
  }

  // bound_space_ids - computed: false, optional: true, required: false
  private _boundSpaceIds?: string[]; 
  public get boundSpaceIds() {
    return cdktn.Fn.tolist(this.getListAttribute('bound_space_ids'));
  }
  public set boundSpaceIds(value: string[]) {
    this._boundSpaceIds = value;
  }
  public resetBoundSpaceIds() {
    this._boundSpaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boundSpaceIdsInput() {
    return this._boundSpaceIds;
  }

  // disable_ip_matching - computed: false, optional: true, required: false
  private _disableIpMatching?: boolean | cdktn.IResolvable; 
  public get disableIpMatching() {
    return this.getBooleanAttribute('disable_ip_matching');
  }
  public set disableIpMatching(value: boolean | cdktn.IResolvable) {
    this._disableIpMatching = value;
  }
  public resetDisableIpMatching() {
    this._disableIpMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIpMatchingInput() {
    return this._disableIpMatching;
  }

  // mount - computed: false, optional: false, required: true
  private _mount?: string; 
  public get mount() {
    return this.getStringAttribute('mount');
  }
  public set mount(value: string) {
    this._mount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._aliasMetadata),
      bound_application_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._boundApplicationIds),
      bound_instance_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._boundInstanceIds),
      bound_organization_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._boundOrganizationIds),
      bound_space_ids: cdktn.listMapper(cdktn.stringToTerraform, false)(this._boundSpaceIds),
      disable_ip_matching: cdktn.booleanToTerraform(this._disableIpMatching),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      token_bound_cidrs: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenBoundCidrs),
      token_explicit_max_ttl: cdktn.numberToTerraform(this._tokenExplicitMaxTtl),
      token_max_ttl: cdktn.numberToTerraform(this._tokenMaxTtl),
      token_no_default_policy: cdktn.booleanToTerraform(this._tokenNoDefaultPolicy),
      token_num_uses: cdktn.numberToTerraform(this._tokenNumUses),
      token_period: cdktn.numberToTerraform(this._tokenPeriod),
      token_policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._tokenPolicies),
      token_ttl: cdktn.numberToTerraform(this._tokenTtl),
      token_type: cdktn.stringToTerraform(this._tokenType),
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
      bound_application_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._boundApplicationIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_instance_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._boundInstanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_organization_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._boundOrganizationIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bound_space_ids: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._boundSpaceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      disable_ip_matching: {
        value: cdktn.booleanToHclTerraform(this._disableIpMatching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktn.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktn.stringToHclTerraform(this._namespace),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
