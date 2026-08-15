/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultGenericSecretConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_secret#mount_id EphemeralVaultGenericSecret#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_secret#namespace EphemeralVaultGenericSecret#namespace}
  */
  readonly namespace?: string;
  /**
  * Full path from which a secret will be read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_secret#path EphemeralVaultGenericSecret#path}
  */
  readonly path: string;
  /**
  * Version of the secret to retrieve. Use -1 for latest version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_secret#version EphemeralVaultGenericSecret#version}
  */
  readonly version?: number;
  /**
  * If set to true, stores 'lease_start_time' in the result.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_secret#with_lease_start_time EphemeralVaultGenericSecret#with_lease_start_time}
  */
  readonly withLeaseStartTime?: boolean | cdktn.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_secret vault_generic_secret}
*/
export class EphemeralVaultGenericSecret extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_generic_secret";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_secret vault_generic_secret} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultGenericSecretConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultGenericSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_generic_secret',
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
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._path = config.path;
    this._version = config.version;
    this._withLeaseStartTime = config.withLeaseStartTime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new cdktn.StringMap(this, "data");
  public get data() {
    return this._data;
  }

  // data_json - computed: true, optional: false, required: false
  public get dataJson() {
    return this.getStringAttribute('data_json');
  }

  // lease_duration - computed: true, optional: false, required: false
  public get leaseDuration() {
    return this.getNumberAttribute('lease_duration');
  }

  // lease_id - computed: true, optional: false, required: false
  public get leaseId() {
    return this.getStringAttribute('lease_id');
  }

  // lease_renewable - computed: true, optional: false, required: false
  public get leaseRenewable() {
    return this.getBooleanAttribute('lease_renewable');
  }

  // lease_start_time - computed: true, optional: false, required: false
  public get leaseStartTime() {
    return this.getStringAttribute('lease_start_time');
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

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // with_lease_start_time - computed: false, optional: true, required: false
  private _withLeaseStartTime?: boolean | cdktn.IResolvable; 
  public get withLeaseStartTime() {
    return this.getBooleanAttribute('with_lease_start_time');
  }
  public set withLeaseStartTime(value: boolean | cdktn.IResolvable) {
    this._withLeaseStartTime = value;
  }
  public resetWithLeaseStartTime() {
    this._withLeaseStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withLeaseStartTimeInput() {
    return this._withLeaseStartTime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      path: cdktn.stringToTerraform(this._path),
      version: cdktn.numberToTerraform(this._version),
      with_lease_start_time: cdktn.booleanToTerraform(this._withLeaseStartTime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      path: {
        value: cdktn.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktn.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      with_lease_start_time: {
        value: cdktn.booleanToHclTerraform(this._withLeaseStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
