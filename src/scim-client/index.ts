/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface ScimClientConfig extends cdktn.TerraformMetaArguments {
  /**
  * Entity ID authorized to call SCIM protocol endpoints on behalf of this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#access_grant_principal ScimClient#access_grant_principal}
  */
  readonly accessGrantPrincipal: string;
  /**
  * Auth mount accessor used to create entity aliases for SCIM users. Immutable after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#alias_mount_accessor ScimClient#alias_mount_accessor}
  */
  readonly aliasMountAccessor?: string;
  /**
  * Whether to allow adoption of existing Vault groups by SCIM-provisioned groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_group_adoption ScimClient#allow_group_adoption}
  */
  readonly allowGroupAdoption?: boolean | cdktn.IResolvable;
  /**
  * Whether to allow adoption of existing Vault entities by SCIM users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allow_user_adoption ScimClient#allow_user_adoption}
  */
  readonly allowUserAdoption?: boolean | cdktn.IResolvable;
  /**
  * Additional mount accessors whose aliases may be managed by this SCIM client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#allowed_extra_alias_mount_accessors ScimClient#allowed_extra_alias_mount_accessors}
  */
  readonly allowedExtraAliasMountAccessors?: string[];
  /**
  * The name of the SCIM client. Must be lowercase, because Vault lowercases client names when it stores them. May contain only letters, digits, '_', '-' and '.', and must start and end with a letter, digit or '_'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#client_name ScimClient#client_name}
  */
  readonly clientName: string;
  /**
  * The Vault SCIM extension schema version used for this client. Must be "2.0" or "2.2". Leave unset to use Vault's default for new clients ("2.2").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#default_schema_version ScimClient#default_schema_version}
  */
  readonly defaultSchemaVersion?: string;
  /**
  * Controls how linked entities/groups/aliases are handled when this resource is destroyed. `orphan_child_resources` detaches managed resources without deleting them; `delete_child_resources` deletes all managed resources along with the client. Leave unset for a plain delete (fails if the client still owns linked resources). Only consulted at destroy time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#deletion_policy ScimClient#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#id ScimClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum number of active tokens for this SCIM client. Must be a positive non-zero value. Leave unset to use Vault's default (2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_active_tokens ScimClient#max_active_tokens}
  */
  readonly maxActiveTokens?: number;
  /**
  * Maximum TTL (in seconds) for tokens issued to this SCIM client. Zero means the cluster default is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#max_token_ttl ScimClient#max_token_ttl}
  */
  readonly maxTokenTtl?: number;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#namespace ScimClient#namespace}
  */
  readonly namespace?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#timeouts ScimClient#timeouts}
  */
  readonly timeouts?: ScimClientTimeouts;
}
export interface ScimClientTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#delete ScimClient#delete}
  */
  readonly delete?: string;
}

export function scimClientTimeoutsToTerraform(struct?: ScimClientTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    delete: cdktn.stringToTerraform(struct!.delete),
  }
}


export function scimClientTimeoutsToHclTerraform(struct?: ScimClientTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ScimClientTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ScimClientTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ScimClientTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client vault_scim_client}
*/
export class ScimClient extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_scim_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a ScimClient resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ScimClient to import
  * @param importFromId The id of the existing ScimClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ScimClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_scim_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/scim_client vault_scim_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ScimClientConfig
  */
  public constructor(scope: Construct, id: string, config: ScimClientConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_scim_client',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.13.0',
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
    this._accessGrantPrincipal = config.accessGrantPrincipal;
    this._aliasMountAccessor = config.aliasMountAccessor;
    this._allowGroupAdoption = config.allowGroupAdoption;
    this._allowUserAdoption = config.allowUserAdoption;
    this._allowedExtraAliasMountAccessors = config.allowedExtraAliasMountAccessors;
    this._clientName = config.clientName;
    this._defaultSchemaVersion = config.defaultSchemaVersion;
    this._deletionPolicy = config.deletionPolicy;
    this._id = config.id;
    this._maxActiveTokens = config.maxActiveTokens;
    this._maxTokenTtl = config.maxTokenTtl;
    this._namespace = config.namespace;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_grant_principal - computed: false, optional: false, required: true
  private _accessGrantPrincipal?: string; 
  public get accessGrantPrincipal() {
    return this.getStringAttribute('access_grant_principal');
  }
  public set accessGrantPrincipal(value: string) {
    this._accessGrantPrincipal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessGrantPrincipalInput() {
    return this._accessGrantPrincipal;
  }

  // alias_mount_accessor - computed: false, optional: true, required: false
  private _aliasMountAccessor?: string; 
  public get aliasMountAccessor() {
    return this.getStringAttribute('alias_mount_accessor');
  }
  public set aliasMountAccessor(value: string) {
    this._aliasMountAccessor = value;
  }
  public resetAliasMountAccessor() {
    this._aliasMountAccessor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasMountAccessorInput() {
    return this._aliasMountAccessor;
  }

  // allow_group_adoption - computed: false, optional: true, required: false
  private _allowGroupAdoption?: boolean | cdktn.IResolvable; 
  public get allowGroupAdoption() {
    return this.getBooleanAttribute('allow_group_adoption');
  }
  public set allowGroupAdoption(value: boolean | cdktn.IResolvable) {
    this._allowGroupAdoption = value;
  }
  public resetAllowGroupAdoption() {
    this._allowGroupAdoption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowGroupAdoptionInput() {
    return this._allowGroupAdoption;
  }

  // allow_user_adoption - computed: false, optional: true, required: false
  private _allowUserAdoption?: boolean | cdktn.IResolvable; 
  public get allowUserAdoption() {
    return this.getBooleanAttribute('allow_user_adoption');
  }
  public set allowUserAdoption(value: boolean | cdktn.IResolvable) {
    this._allowUserAdoption = value;
  }
  public resetAllowUserAdoption() {
    this._allowUserAdoption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserAdoptionInput() {
    return this._allowUserAdoption;
  }

  // allowed_extra_alias_mount_accessors - computed: false, optional: true, required: false
  private _allowedExtraAliasMountAccessors?: string[]; 
  public get allowedExtraAliasMountAccessors() {
    return cdktn.Fn.tolist(this.getListAttribute('allowed_extra_alias_mount_accessors'));
  }
  public set allowedExtraAliasMountAccessors(value: string[]) {
    this._allowedExtraAliasMountAccessors = value;
  }
  public resetAllowedExtraAliasMountAccessors() {
    this._allowedExtraAliasMountAccessors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedExtraAliasMountAccessorsInput() {
    return this._allowedExtraAliasMountAccessors;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_name - computed: false, optional: false, required: true
  private _clientName?: string; 
  public get clientName() {
    return this.getStringAttribute('client_name');
  }
  public set clientName(value: string) {
    this._clientName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientNameInput() {
    return this._clientName;
  }

  // default_schema_version - computed: true, optional: true, required: false
  private _defaultSchemaVersion?: string; 
  public get defaultSchemaVersion() {
    return this.getStringAttribute('default_schema_version');
  }
  public set defaultSchemaVersion(value: string) {
    this._defaultSchemaVersion = value;
  }
  public resetDefaultSchemaVersion() {
    this._defaultSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSchemaVersionInput() {
    return this._defaultSchemaVersion;
  }

  // deleting - computed: true, optional: false, required: false
  public get deleting() {
    return this.getBooleanAttribute('deleting');
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
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

  // max_active_tokens - computed: true, optional: true, required: false
  private _maxActiveTokens?: number; 
  public get maxActiveTokens() {
    return this.getNumberAttribute('max_active_tokens');
  }
  public set maxActiveTokens(value: number) {
    this._maxActiveTokens = value;
  }
  public resetMaxActiveTokens() {
    this._maxActiveTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxActiveTokensInput() {
    return this._maxActiveTokens;
  }

  // max_token_ttl - computed: true, optional: true, required: false
  private _maxTokenTtl?: number; 
  public get maxTokenTtl() {
    return this.getNumberAttribute('max_token_ttl');
  }
  public set maxTokenTtl(value: number) {
    this._maxTokenTtl = value;
  }
  public resetMaxTokenTtl() {
    this._maxTokenTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTokenTtlInput() {
    return this._maxTokenTtl;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ScimClientTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ScimClientTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_grant_principal: cdktn.stringToTerraform(this._accessGrantPrincipal),
      alias_mount_accessor: cdktn.stringToTerraform(this._aliasMountAccessor),
      allow_group_adoption: cdktn.booleanToTerraform(this._allowGroupAdoption),
      allow_user_adoption: cdktn.booleanToTerraform(this._allowUserAdoption),
      allowed_extra_alias_mount_accessors: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedExtraAliasMountAccessors),
      client_name: cdktn.stringToTerraform(this._clientName),
      default_schema_version: cdktn.stringToTerraform(this._defaultSchemaVersion),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      id: cdktn.stringToTerraform(this._id),
      max_active_tokens: cdktn.numberToTerraform(this._maxActiveTokens),
      max_token_ttl: cdktn.numberToTerraform(this._maxTokenTtl),
      namespace: cdktn.stringToTerraform(this._namespace),
      timeouts: scimClientTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_grant_principal: {
        value: cdktn.stringToHclTerraform(this._accessGrantPrincipal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias_mount_accessor: {
        value: cdktn.stringToHclTerraform(this._aliasMountAccessor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_group_adoption: {
        value: cdktn.booleanToHclTerraform(this._allowGroupAdoption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_user_adoption: {
        value: cdktn.booleanToHclTerraform(this._allowUserAdoption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_extra_alias_mount_accessors: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedExtraAliasMountAccessors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      client_name: {
        value: cdktn.stringToHclTerraform(this._clientName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_schema_version: {
        value: cdktn.stringToHclTerraform(this._defaultSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
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
      max_active_tokens: {
        value: cdktn.numberToHclTerraform(this._maxActiveTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_token_ttl: {
        value: cdktn.numberToHclTerraform(this._maxTokenTtl),
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
      timeouts: {
        value: scimClientTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ScimClientTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
