/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultApproleAuthBackendRoleSecretIdConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Unique name of the auth backend to configure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#backend EphemeralVaultApproleAuthBackendRoleSecretId#backend}
  */
  readonly backend?: string;
  /**
  * List of CIDR blocks that can log in using the SecretID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#cidr_list EphemeralVaultApproleAuthBackendRoleSecretId#cidr_list}
  */
  readonly cidrList?: string[];
  /**
  * JSON-encoded secret data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#metadata EphemeralVaultApproleAuthBackendRoleSecretId#metadata}
  */
  readonly metadata?: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#mount_id EphemeralVaultApproleAuthBackendRoleSecretId#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#namespace EphemeralVaultApproleAuthBackendRoleSecretId#namespace}
  */
  readonly namespace?: string;
  /**
  * The number of uses for the secret-id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#num_uses EphemeralVaultApproleAuthBackendRoleSecretId#num_uses}
  */
  readonly numUses?: number;
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#role_name EphemeralVaultApproleAuthBackendRoleSecretId#role_name}
  */
  readonly roleName: string;
  /**
  * The TTL duration of the SecretID in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id#ttl EphemeralVaultApproleAuthBackendRoleSecretId#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id}
*/
export class EphemeralVaultApproleAuthBackendRoleSecretId extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_approle_auth_backend_role_secret_id";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/approle_auth_backend_role_secret_id vault_approle_auth_backend_role_secret_id} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultApproleAuthBackendRoleSecretIdConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultApproleAuthBackendRoleSecretIdConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_approle_auth_backend_role_secret_id',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.11.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._backend = config.backend;
    this._cidrList = config.cidrList;
    this._metadata = config.metadata;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._numUses = config.numUses;
    this._roleName = config.roleName;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessor - computed: true, optional: false, required: false
  public get accessor() {
    return this.getStringAttribute('accessor');
  }

  // backend - computed: true, optional: true, required: false
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  public resetBackend() {
    this._backend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
  }

  // cidr_list - computed: false, optional: true, required: false
  private _cidrList?: string[]; 
  public get cidrList() {
    return cdktn.Fn.tolist(this.getListAttribute('cidr_list'));
  }
  public set cidrList(value: string[]) {
    this._cidrList = value;
  }
  public resetCidrList() {
    this._cidrList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrListInput() {
    return this._cidrList;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
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

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // secret_id - computed: true, optional: false, required: false
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backend: cdktn.stringToTerraform(this._backend),
      cidr_list: cdktn.listMapper(cdktn.stringToTerraform, false)(this._cidrList),
      metadata: cdktn.stringToTerraform(this._metadata),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      num_uses: cdktn.numberToTerraform(this._numUses),
      role_name: cdktn.stringToTerraform(this._roleName),
      ttl: cdktn.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backend: {
        value: cdktn.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cidr_list: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._cidrList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      metadata: {
        value: cdktn.stringToHclTerraform(this._metadata),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      num_uses: {
        value: cdktn.numberToHclTerraform(this._numUses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role_name: {
        value: cdktn.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktn.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
