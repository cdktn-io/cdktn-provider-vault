/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultTokenConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * The display name of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#display_name EphemeralVaultToken#display_name}
  */
  readonly displayName?: string;
  /**
  * Name of the entity alias to associate with during token creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#entity_alias EphemeralVaultToken#entity_alias}
  */
  readonly entityAlias?: string;
  /**
  * The explicit max TTL of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#explicit_max_ttl EphemeralVaultToken#explicit_max_ttl}
  */
  readonly explicitMaxTtl?: string;
  /**
  * The ID of the client token. This is an input field, not a resource identifier. Can only be specified by a root token. The ID provided may not contain a '.' character and should not start with the 's.' prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#id EphemeralVaultToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metadata to be associated with the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#metadata EphemeralVaultToken#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#mount_id EphemeralVaultToken#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#namespace EphemeralVaultToken#namespace}
  */
  readonly namespace?: string;
  /**
  * Flag to disable the default policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_default_policy EphemeralVaultToken#no_default_policy}
  */
  readonly noDefaultPolicy?: boolean | cdktn.IResolvable;
  /**
  * Flag to create a token without parent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#no_parent EphemeralVaultToken#no_parent}
  */
  readonly noParent?: boolean | cdktn.IResolvable;
  /**
  * The number of allowed uses of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#num_uses EphemeralVaultToken#num_uses}
  */
  readonly numUses?: number;
  /**
  * The period of the token for periodic tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#period EphemeralVaultToken#period}
  */
  readonly period?: string;
  /**
  * List of policies to attach to the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#policies EphemeralVaultToken#policies}
  */
  readonly policies?: string[];
  /**
  * Flag to allow the token to be renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#renewable EphemeralVaultToken#renewable}
  */
  readonly renewable?: boolean | cdktn.IResolvable;
  /**
  * The token role name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#role_name EphemeralVaultToken#role_name}
  */
  readonly roleName?: string;
  /**
  * The TTL period of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#ttl EphemeralVaultToken#ttl}
  */
  readonly ttl?: string;
  /**
  * The token type. Can be 'batch' or 'service'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#type EphemeralVaultToken#type}
  */
  readonly type?: string;
  /**
  * The TTL period of the wrapped token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token#wrapping_ttl EphemeralVaultToken#wrapping_ttl}
  */
  readonly wrappingTtl?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token vault_token}
*/
export class EphemeralVaultToken extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_token";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/token vault_token} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultTokenConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultTokenConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'vault_token',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.10.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._entityAlias = config.entityAlias;
    this._explicitMaxTtl = config.explicitMaxTtl;
    this._id = config.id;
    this._metadata = config.metadata;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._noDefaultPolicy = config.noDefaultPolicy;
    this._noParent = config.noParent;
    this._numUses = config.numUses;
    this._period = config.period;
    this._policies = config.policies;
    this._renewable = config.renewable;
    this._roleName = config.roleName;
    this._ttl = config.ttl;
    this._type = config.type;
    this._wrappingTtl = config.wrappingTtl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // client_token - computed: true, optional: false, required: false
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // entity_alias - computed: false, optional: true, required: false
  private _entityAlias?: string; 
  public get entityAlias() {
    return this.getStringAttribute('entity_alias');
  }
  public set entityAlias(value: string) {
    this._entityAlias = value;
  }
  public resetEntityAlias() {
    this._entityAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityAliasInput() {
    return this._entityAlias;
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // explicit_max_ttl - computed: false, optional: true, required: false
  private _explicitMaxTtl?: string; 
  public get explicitMaxTtl() {
    return this.getStringAttribute('explicit_max_ttl');
  }
  public set explicitMaxTtl(value: string) {
    this._explicitMaxTtl = value;
  }
  public resetExplicitMaxTtl() {
    this._explicitMaxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get explicitMaxTtlInput() {
    return this._explicitMaxTtl;
  }

  // id - computed: false, optional: true, required: false
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

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // lease_id - computed: true, optional: false, required: false
  public get leaseId() {
    return this.getStringAttribute('lease_id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // mount_id - computed: false, optional: true, required: false
  private _mountId?: string; 
  public get mountId() {
    return this.getStringAttribute('mount_id');
  }
  public set mountId(value: string) {
    this._mountId = value;
  }
  public resetMountId() {
    this._mountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountIdInput() {
    return this._mountId;
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

  // no_default_policy - computed: false, optional: true, required: false
  private _noDefaultPolicy?: boolean | cdktn.IResolvable; 
  public get noDefaultPolicy() {
    return this.getBooleanAttribute('no_default_policy');
  }
  public set noDefaultPolicy(value: boolean | cdktn.IResolvable) {
    this._noDefaultPolicy = value;
  }
  public resetNoDefaultPolicy() {
    this._noDefaultPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDefaultPolicyInput() {
    return this._noDefaultPolicy;
  }

  // no_parent - computed: false, optional: true, required: false
  private _noParent?: boolean | cdktn.IResolvable; 
  public get noParent() {
    return this.getBooleanAttribute('no_parent');
  }
  public set noParent(value: boolean | cdktn.IResolvable) {
    this._noParent = value;
  }
  public resetNoParent() {
    this._noParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noParentInput() {
    return this._noParent;
  }

  // num_uses - computed: false, optional: true, required: false
  private _numUses?: number; 
  public get numUses() {
    return this.getNumberAttribute('num_uses');
  }
  public set numUses(value: number) {
    this._numUses = value;
  }
  public resetNumUses() {
    this._numUses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numUsesInput() {
    return this._numUses;
  }

  // orphan - computed: true, optional: false, required: false
  public get orphan() {
    return this.getBooleanAttribute('orphan');
  }

  // period - computed: false, optional: true, required: false
  private _period?: string; 
  public get period() {
    return this.getStringAttribute('period');
  }
  public set period(value: string) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktn.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // renewable - computed: false, optional: true, required: false
  private _renewable?: boolean | cdktn.IResolvable; 
  public get renewable() {
    return this.getBooleanAttribute('renewable');
  }
  public set renewable(value: boolean | cdktn.IResolvable) {
    this._renewable = value;
  }
  public resetRenewable() {
    this._renewable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewableInput() {
    return this._renewable;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // token_policies - computed: true, optional: false, required: false
  public get tokenPolicies() {
    return this.getListAttribute('token_policies');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wrapped_token - computed: true, optional: false, required: false
  public get wrappedToken() {
    return this.getStringAttribute('wrapped_token');
  }

  // wrapping_accessor - computed: true, optional: false, required: false
  public get wrappingAccessor() {
    return this.getStringAttribute('wrapping_accessor');
  }

  // wrapping_ttl - computed: false, optional: true, required: false
  private _wrappingTtl?: string; 
  public get wrappingTtl() {
    return this.getStringAttribute('wrapping_ttl');
  }
  public set wrappingTtl(value: string) {
    this._wrappingTtl = value;
  }
  public resetWrappingTtl() {
    this._wrappingTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappingTtlInput() {
    return this._wrappingTtl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktn.stringToTerraform(this._displayName),
      entity_alias: cdktn.stringToTerraform(this._entityAlias),
      explicit_max_ttl: cdktn.stringToTerraform(this._explicitMaxTtl),
      id: cdktn.stringToTerraform(this._id),
      metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._metadata),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      no_default_policy: cdktn.booleanToTerraform(this._noDefaultPolicy),
      no_parent: cdktn.booleanToTerraform(this._noParent),
      num_uses: cdktn.numberToTerraform(this._numUses),
      period: cdktn.stringToTerraform(this._period),
      policies: cdktn.listMapper(cdktn.stringToTerraform, false)(this._policies),
      renewable: cdktn.booleanToTerraform(this._renewable),
      role_name: cdktn.stringToTerraform(this._roleName),
      ttl: cdktn.stringToTerraform(this._ttl),
      type: cdktn.stringToTerraform(this._type),
      wrapping_ttl: cdktn.stringToTerraform(this._wrappingTtl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_alias: {
        value: cdktn.stringToHclTerraform(this._entityAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      explicit_max_ttl: {
        value: cdktn.stringToHclTerraform(this._explicitMaxTtl),
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
      metadata: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mount_id: {
        value: cdktn.stringToHclTerraform(this._mountId),
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
      no_default_policy: {
        value: cdktn.booleanToHclTerraform(this._noDefaultPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_parent: {
        value: cdktn.booleanToHclTerraform(this._noParent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      num_uses: {
        value: cdktn.numberToHclTerraform(this._numUses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      period: {
        value: cdktn.stringToHclTerraform(this._period),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policies: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      renewable: {
        value: cdktn.booleanToHclTerraform(this._renewable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      role_name: {
        value: cdktn.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktn.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktn.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wrapping_ttl: {
        value: cdktn.stringToHclTerraform(this._wrappingTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
