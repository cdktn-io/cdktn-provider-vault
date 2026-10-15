/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface PkiSecretBackendWrappedKeyImportConfig extends cdktn.TerraformMetaArguments {
  /**
  * HMAC fingerprint of the wrapping key used to encrypt the blob.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#export_key_hmac PkiSecretBackendWrappedKeyImport#export_key_hmac}
  */
  readonly exportKeyHmac: string;
  /**
  * Human-readable name for the imported key in Vault.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#key_name PkiSecretBackendWrappedKeyImport#key_name}
  */
  readonly keyName?: string;
  /**
  * Path of the destination PKI secrets engine mount.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#mount PkiSecretBackendWrappedKeyImport#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#namespace PkiSecretBackendWrappedKeyImport#namespace}
  */
  readonly namespace?: string;
  /**
  * Base64-encoded wrapped CA private key blob.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#wrapped_key PkiSecretBackendWrappedKeyImport#wrapped_key}
  */
  readonly wrappedKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import vault_pki_secret_backend_wrapped_key_import}
*/
export class PkiSecretBackendWrappedKeyImport extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_pki_secret_backend_wrapped_key_import";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a PkiSecretBackendWrappedKeyImport resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PkiSecretBackendWrappedKeyImport to import
  * @param importFromId The id of the existing PkiSecretBackendWrappedKeyImport that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PkiSecretBackendWrappedKeyImport to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_pki_secret_backend_wrapped_key_import", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.13.0/docs/resources/pki_secret_backend_wrapped_key_import vault_pki_secret_backend_wrapped_key_import} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PkiSecretBackendWrappedKeyImportConfig
  */
  public constructor(scope: Construct, id: string, config: PkiSecretBackendWrappedKeyImportConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_pki_secret_backend_wrapped_key_import',
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
    this._exportKeyHmac = config.exportKeyHmac;
    this._keyName = config.keyName;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._wrappedKey = config.wrappedKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_key_hmac - computed: false, optional: false, required: true
  private _exportKeyHmac?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get exportKeyHmac() {
    return this.getStringAttribute('export_key_hmac');
  }
  public set exportKeyHmac(value: string) {
    this._exportKeyHmac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportKeyHmacInput() {
    return this._exportKeyHmac;
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_name - computed: true, optional: true, required: false
  private _keyName?: string; 
  public get keyName() {
    return this.getStringAttribute('key_name');
  }
  public set keyName(value: string) {
    this._keyName = value;
  }
  public resetKeyName() {
    this._keyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyNameInput() {
    return this._keyName;
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
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

  // wrapped_key - computed: false, optional: false, required: true
  private _wrappedKey?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get wrappedKey() {
    return this.getStringAttribute('wrapped_key');
  }
  public set wrappedKey(value: string) {
    this._wrappedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wrappedKeyInput() {
    return this._wrappedKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_key_hmac: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._exportKeyHmac)),
      key_name: cdktn.stringToTerraform(this._keyName),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      wrapped_key: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._wrappedKey)),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_key_hmac: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._exportKeyHmac)),
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
      mount: {
        value: cdktn.stringToHclTerraform(this._mount),
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
      wrapped_key: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._wrappedKey)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
