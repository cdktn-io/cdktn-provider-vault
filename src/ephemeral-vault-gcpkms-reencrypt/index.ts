/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultGcpkmsReencryptConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * Base64-encoded additional authenticated data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#additional_authenticated_data EphemeralVaultGcpkmsReencrypt#additional_authenticated_data}
  */
  readonly additionalAuthenticatedData?: string;
  /**
  * Base64-encoded ciphertext to re-encrypt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#ciphertext EphemeralVaultGcpkmsReencrypt#ciphertext}
  */
  readonly ciphertext: string;
  /**
  * Name of the Vault key to use for re-encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#key_name EphemeralVaultGcpkmsReencrypt#key_name}
  */
  readonly keyName: string;
  /**
  * Version of the key to use for re-encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#key_version EphemeralVaultGcpkmsReencrypt#key_version}
  */
  readonly keyVersion?: number;
  /**
  * Path where the GCP KMS secrets engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#mount EphemeralVaultGcpkmsReencrypt#mount}
  */
  readonly mount: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#mount_id EphemeralVaultGcpkmsReencrypt#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt#namespace EphemeralVaultGcpkmsReencrypt#namespace}
  */
  readonly namespace?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt vault_gcpkms_reencrypt}
*/
export class EphemeralVaultGcpkmsReencrypt extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_gcpkms_reencrypt";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_reencrypt vault_gcpkms_reencrypt} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultGcpkmsReencryptConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultGcpkmsReencryptConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_gcpkms_reencrypt',
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
    this._additionalAuthenticatedData = config.additionalAuthenticatedData;
    this._ciphertext = config.ciphertext;
    this._keyName = config.keyName;
    this._keyVersion = config.keyVersion;
    this._mount = config.mount;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_authenticated_data - computed: false, optional: true, required: false
  private _additionalAuthenticatedData?: string; 
  public get additionalAuthenticatedData() {
    return this.getStringAttribute('additional_authenticated_data');
  }
  public set additionalAuthenticatedData(value: string) {
    this._additionalAuthenticatedData = value;
  }
  public resetAdditionalAuthenticatedData() {
    this._additionalAuthenticatedData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalAuthenticatedDataInput() {
    return this._additionalAuthenticatedData;
  }

  // ciphertext - computed: false, optional: false, required: true
  private _ciphertext?: string; 
  public get ciphertext() {
    return this.getStringAttribute('ciphertext');
  }
  public set ciphertext(value: string) {
    this._ciphertext = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextInput() {
    return this._ciphertext;
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

  // key_version - computed: false, optional: true, required: false
  private _keyVersion?: number; 
  public get keyVersion() {
    return this.getNumberAttribute('key_version');
  }
  public set keyVersion(value: number) {
    this._keyVersion = value;
  }
  public resetKeyVersion() {
    this._keyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVersionInput() {
    return this._keyVersion;
  }

  // key_version_returned - computed: true, optional: false, required: false
  public get keyVersionReturned() {
    return this.getStringAttribute('key_version_returned');
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

  // new_ciphertext - computed: true, optional: false, required: false
  public get newCiphertext() {
    return this.getStringAttribute('new_ciphertext');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional_authenticated_data: cdktn.stringToTerraform(this._additionalAuthenticatedData),
      ciphertext: cdktn.stringToTerraform(this._ciphertext),
      key_name: cdktn.stringToTerraform(this._keyName),
      key_version: cdktn.numberToTerraform(this._keyVersion),
      mount: cdktn.stringToTerraform(this._mount),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_authenticated_data: {
        value: cdktn.stringToHclTerraform(this._additionalAuthenticatedData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciphertext: {
        value: cdktn.stringToHclTerraform(this._ciphertext),
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
