/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultGcpkmsSignConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Base64-encoded digest to sign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#digest EphemeralVaultGcpkmsSign#digest}
  */
  readonly digest: string;
  /**
  * Name of the Vault key to use for signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#key_name EphemeralVaultGcpkmsSign#key_name}
  */
  readonly keyName: string;
  /**
  * Version of the key to use for signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#key_version EphemeralVaultGcpkmsSign#key_version}
  */
  readonly keyVersion: number;
  /**
  * Path where the GCP KMS secrets engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#mount EphemeralVaultGcpkmsSign#mount}
  */
  readonly mount: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#mount_id EphemeralVaultGcpkmsSign#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign#namespace EphemeralVaultGcpkmsSign#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign vault_gcpkms_sign}
*/
export class EphemeralVaultGcpkmsSign extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_gcpkms_sign";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_sign vault_gcpkms_sign} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultGcpkmsSignConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultGcpkmsSignConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_gcpkms_sign',
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
    this._digest = config.digest;
    this._keyName = config.keyName;
    this._keyVersion = config.keyVersion;
    this._mount = config.mount;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // digest - computed: false, optional: false, required: true
  private _digest?: string; 
  public get digest() {
    return this.getStringAttribute('digest');
  }
  public set digest(value: string) {
    this._digest = value;
  }
  // Temporarily expose input value. Use with caution.
  public get digestInput() {
    return this._digest;
  }

  // key_name - computed: false, optional: false, required: true
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_version - computed: false, optional: false, required: true
  private _keyVersion?: number; 
  public get keyVersion() {
    return this.getNumberAttribute('key_version');
  }
  public set keyVersion(value: number) {
    this._keyVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion;
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

  // signature - computed: true, optional: false, required: false
  public get signature() {
    return this.getStringAttribute('signature');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      digest: cdktn.stringToTerraform(this._digest),
      key_name: cdktn.stringToTerraform(this._keyName),
      key_version: cdktn.numberToTerraform(this._keyVersion),
      mount: cdktn.stringToTerraform(this._mount),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      digest: {
        value: cdktn.stringToHclTerraform(this._digest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_name: {
        value: cdktn.stringToHclTerraform(this._keyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_version: {
        value: cdktn.numberToHclTerraform(this._keyVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
