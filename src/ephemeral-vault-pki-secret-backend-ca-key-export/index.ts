/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface EphemeralVaultPkiSecretBackendCaKeyExportConfig extends cdktn.TerraformEphemeralMetaArguments {
  /**
  * UUID of the CA key to export from the source mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#ca_key_uuid EphemeralVaultPkiSecretBackendCaKeyExport#ca_key_uuid}
  */
  readonly caKeyUuid: string;
  /**
  * Path of the source PKI secrets engine mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount EphemeralVaultPkiSecretBackendCaKeyExport#mount}
  */
  readonly mount: string;
  /**
  * Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#mount_id EphemeralVaultPkiSecretBackendCaKeyExport#mount_id}
  */
  readonly mountId?: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#namespace EphemeralVaultPkiSecretBackendCaKeyExport#namespace}
  */
  readonly namespace?: string;
  /**
  * PEM-encoded public key of the destination wrapping keypair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export#public_key EphemeralVaultPkiSecretBackendCaKeyExport#public_key}
  */
  readonly publicKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export vault_pki_secret_backend_ca_key_export}
*/
export class EphemeralVaultPkiSecretBackendCaKeyExport extends cdktn.TerraformEphemeralResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_ca_key_export";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/ephemeral-resources/pki_secret_backend_ca_key_export vault_pki_secret_backend_ca_key_export} Ephemeral Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EphemeralVaultPkiSecretBackendCaKeyExportConfig
  */
  public constructor(scope: Construct, id: string, config: EphemeralVaultPkiSecretBackendCaKeyExportConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_ca_key_export',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.13.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      forEach: config.forEach
    });
    this._caKeyUuid = config.caKeyUuid;
    this._mount = config.mount;
    this._mountId = config.mountId;
    this._namespace = config.namespace;
    this._publicKey = config.publicKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_key_uuid - computed: false, optional: false, required: true
  private _caKeyUuid?: string; 
  public get caKeyUuid() {
    return this.getStringAttribute('ca_key_uuid');
  }
  public set caKeyUuid(value: string) {
    this._caKeyUuid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caKeyUuidInput() {
    return this._caKeyUuid;
  }

  // export_key_hmac - computed: true, optional: false, required: false
  public get exportKeyHmac() {
    return this.getStringAttribute('export_key_hmac');
  }

  // exported_at - computed: true, optional: false, required: false
  public get exportedAt() {
    return this.getStringAttribute('exported_at');
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

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // wrapped_key - computed: true, optional: false, required: false
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_key_uuid: cdktn.stringToTerraform(this._caKeyUuid),
      mount: cdktn.stringToTerraform(this._mount),
      mount_id: cdktn.stringToTerraform(this._mountId),
      namespace: cdktn.stringToTerraform(this._namespace),
      public_key: cdktn.stringToTerraform(this._publicKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_key_uuid: {
        value: cdktn.stringToHclTerraform(this._caKeyUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      public_key: {
        value: cdktn.stringToHclTerraform(this._publicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
