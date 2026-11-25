/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TransitSecretBackendImportedKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * If set, enables taking backup of named key in plaintext format. Once enabled, cannot be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_plaintext_backup TransitSecretBackendImportedKey#allow_plaintext_backup}
  */
  readonly allowPlaintextBackup?: boolean | cdktn.IResolvable;
  /**
  * If set, the imported key can be rotated within Vault by using the rotate endpoint. Once the key is rotated in Vault, it no longer accepts imported key material. Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#allow_rotation TransitSecretBackendImportedKey#allow_rotation}
  */
  readonly allowRotation?: boolean | cdktn.IResolvable;
  /**
  * The period in seconds at which this key should be rotated automatically. Set to 0 to disable; otherwise it must be at least one hour (3600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#auto_rotate_period TransitSecretBackendImportedKey#auto_rotate_period}
  */
  readonly autoRotatePeriod?: number;
  /**
  * A base64-encoded string containing the wrapped ephemeral AES key and the encrypted key material (write-only). Required with `ciphertext_wo_version`. Vault requires either this or `public_key` for the initial import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo TransitSecretBackendImportedKey#ciphertext_wo}
  */
  readonly ciphertextWo?: string;
  /**
  * Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#ciphertext_wo_version TransitSecretBackendImportedKey#ciphertext_wo_version}
  */
  readonly ciphertextWoVersion?: number;
  /**
  * A base64-encoded string providing a context for key derivation. Required if `derived` is true. Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#context TransitSecretBackendImportedKey#context}
  */
  readonly context?: string;
  /**
  * Specifies if the key is allowed to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#deletion_allowed TransitSecretBackendImportedKey#deletion_allowed}
  */
  readonly deletionAllowed?: boolean | cdktn.IResolvable;
  /**
  * Specifies if key derivation is to be used. Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#derived TransitSecretBackendImportedKey#derived}
  */
  readonly derived?: boolean | cdktn.IResolvable;
  /**
  * Enables keys to be exportable. Once enabled, cannot be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#exportable TransitSecretBackendImportedKey#exportable}
  */
  readonly exportable?: boolean | cdktn.IResolvable;
  /**
  * The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). Vault uses `SHA256` if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#hash_function TransitSecretBackendImportedKey#hash_function}
  */
  readonly hashFunction?: string;
  /**
  * Changes the key type of the new key version when importing key material into an existing key. Sent as `type` to Vault's import key version endpoint, so it has no effect on the initial import. Reported by `latest_version_type`. Requires Vault Enterprise 2.2.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import_version_type TransitSecretBackendImportedKey#import_version_type}
  */
  readonly importVersionType?: string;
  /**
  * Minimum key version to use for decryption. Vault always sets this to at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_decryption_version TransitSecretBackendImportedKey#min_decryption_version}
  */
  readonly minDecryptionVersion?: number;
  /**
  * Minimum key version to use for encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#min_encryption_version TransitSecretBackendImportedKey#min_encryption_version}
  */
  readonly minEncryptionVersion?: number;
  /**
  * Path where the Transit secret backend is mounted. Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#mount TransitSecretBackendImportedKey#mount}
  */
  readonly mount: string;
  /**
  * Name of the encryption key to create. Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#name TransitSecretBackendImportedKey#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#namespace TransitSecretBackendImportedKey#namespace}
  */
  readonly namespace?: string;
  /**
  * A plaintext PEM public key to be imported. Vault requires either this or `ciphertext_wo` for the initial import. Changing it imports the new public key as a new key version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#public_key TransitSecretBackendImportedKey#public_key}
  */
  readonly publicKey?: string;
  /**
  * Specifies the type of key to create (e.g. `aes128-gcm96`, `aes256-gcm96`, `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `hmac`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`). Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#type TransitSecretBackendImportedKey#type}
  */
  readonly type: string;
  /**
  * Specifies the existing key version to update when importing key material to an already-imported key. If omitted, Vault creates a new version, except when the latest version contains only a public key and the request supplies its matching private key; in that case Vault adds the private key to the existing, latest version. Ignored when the key is first imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#version TransitSecretBackendImportedKey#version}
  */
  readonly version?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key vault_transit_secret_backend_imported_key}
*/
export class TransitSecretBackendImportedKey extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transit_secret_backend_imported_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TransitSecretBackendImportedKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitSecretBackendImportedKey to import
  * @param importFromId The id of the existing TransitSecretBackendImportedKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitSecretBackendImportedKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_transit_secret_backend_imported_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transit_secret_backend_imported_key vault_transit_secret_backend_imported_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitSecretBackendImportedKeyConfig
  */
  public constructor(scope: Construct, id: string, config: TransitSecretBackendImportedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transit_secret_backend_imported_key',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.14.0',
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
    this._allowPlaintextBackup = config.allowPlaintextBackup;
    this._allowRotation = config.allowRotation;
    this._autoRotatePeriod = config.autoRotatePeriod;
    this._ciphertextWo = config.ciphertextWo;
    this._ciphertextWoVersion = config.ciphertextWoVersion;
    this._context = config.context;
    this._deletionAllowed = config.deletionAllowed;
    this._derived = config.derived;
    this._exportable = config.exportable;
    this._hashFunction = config.hashFunction;
    this._importVersionType = config.importVersionType;
    this._minDecryptionVersion = config.minDecryptionVersion;
    this._minEncryptionVersion = config.minEncryptionVersion;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._publicKey = config.publicKey;
    this._type = config.type;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_plaintext_backup - computed: true, optional: true, required: false
  private _allowPlaintextBackup?: boolean | cdktn.IResolvable; 
  public get allowPlaintextBackup() {
    return this.getBooleanAttribute('allow_plaintext_backup');
  }
  public set allowPlaintextBackup(value: boolean | cdktn.IResolvable) {
    this._allowPlaintextBackup = value;
  }
  public resetAllowPlaintextBackup() {
    this._allowPlaintextBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPlaintextBackupInput() {
    return this._allowPlaintextBackup;
  }

  // allow_rotation - computed: true, optional: true, required: false
  private _allowRotation?: boolean | cdktn.IResolvable; 
  public get allowRotation() {
    return this.getBooleanAttribute('allow_rotation');
  }
  public set allowRotation(value: boolean | cdktn.IResolvable) {
    this._allowRotation = value;
  }
  public resetAllowRotation() {
    this._allowRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRotationInput() {
    return this._allowRotation;
  }

  // auto_rotate_period - computed: true, optional: true, required: false
  private _autoRotatePeriod?: number; 
  public get autoRotatePeriod() {
    return this.getNumberAttribute('auto_rotate_period');
  }
  public set autoRotatePeriod(value: number) {
    this._autoRotatePeriod = value;
  }
  public resetAutoRotatePeriod() {
    this._autoRotatePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRotatePeriodInput() {
    return this._autoRotatePeriod;
  }

  // ciphertext_wo - computed: false, optional: true, required: false
  private _ciphertextWo?: string; 
  /**
  * @deprecated Write-only: the provider never returns this value; reading it always yields null by protocol contract. The getter remains for compatibility and will be removed in a future prebuilt-provider major.
  */
  public get ciphertextWo() {
    return this.getStringAttribute('ciphertext_wo');
  }
  public set ciphertextWo(value: string) {
    this._ciphertextWo = value;
  }
  public resetCiphertextWo() {
    this._ciphertextWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextWoInput() {
    return this._ciphertextWo;
  }

  // ciphertext_wo_version - computed: false, optional: true, required: false
  private _ciphertextWoVersion?: number; 
  public get ciphertextWoVersion() {
    return this.getNumberAttribute('ciphertext_wo_version');
  }
  public set ciphertextWoVersion(value: number) {
    this._ciphertextWoVersion = value;
  }
  public resetCiphertextWoVersion() {
    this._ciphertextWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphertextWoVersionInput() {
    return this._ciphertextWoVersion;
  }

  // context - computed: false, optional: true, required: false
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  public resetContext() {
    this._context = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // deletion_allowed - computed: true, optional: true, required: false
  private _deletionAllowed?: boolean | cdktn.IResolvable; 
  public get deletionAllowed() {
    return this.getBooleanAttribute('deletion_allowed');
  }
  public set deletionAllowed(value: boolean | cdktn.IResolvable) {
    this._deletionAllowed = value;
  }
  public resetDeletionAllowed() {
    this._deletionAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionAllowedInput() {
    return this._deletionAllowed;
  }

  // derived - computed: true, optional: true, required: false
  private _derived?: boolean | cdktn.IResolvable; 
  public get derived() {
    return this.getBooleanAttribute('derived');
  }
  public set derived(value: boolean | cdktn.IResolvable) {
    this._derived = value;
  }
  public resetDerived() {
    this._derived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get derivedInput() {
    return this._derived;
  }

  // exportable - computed: true, optional: true, required: false
  private _exportable?: boolean | cdktn.IResolvable; 
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }
  public set exportable(value: boolean | cdktn.IResolvable) {
    this._exportable = value;
  }
  public resetExportable() {
    this._exportable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportableInput() {
    return this._exportable;
  }

  // hash_function - computed: false, optional: true, required: false
  private _hashFunction?: string; 
  public get hashFunction() {
    return this.getStringAttribute('hash_function');
  }
  public set hashFunction(value: string) {
    this._hashFunction = value;
  }
  public resetHashFunction() {
    this._hashFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashFunctionInput() {
    return this._hashFunction;
  }

  // import_version_type - computed: false, optional: true, required: false
  private _importVersionType?: string; 
  public get importVersionType() {
    return this.getStringAttribute('import_version_type');
  }
  public set importVersionType(value: string) {
    this._importVersionType = value;
  }
  public resetImportVersionType() {
    this._importVersionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importVersionTypeInput() {
    return this._importVersionType;
  }

  // imported_key - computed: true, optional: false, required: false
  public get importedKey() {
    return this.getBooleanAttribute('imported_key');
  }

  // imported_key_allow_rotation - computed: true, optional: false, required: false
  public get importedKeyAllowRotation() {
    return this.getBooleanAttribute('imported_key_allow_rotation');
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new cdktn.StringMap(this, "keys");
  public get keys() {
    return this._keys;
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // latest_version_type - computed: true, optional: false, required: false
  public get latestVersionType() {
    return this.getStringAttribute('latest_version_type');
  }

  // min_available_version - computed: true, optional: false, required: false
  public get minAvailableVersion() {
    return this.getNumberAttribute('min_available_version');
  }

  // min_decryption_version - computed: true, optional: true, required: false
  private _minDecryptionVersion?: number; 
  public get minDecryptionVersion() {
    return this.getNumberAttribute('min_decryption_version');
  }
  public set minDecryptionVersion(value: number) {
    this._minDecryptionVersion = value;
  }
  public resetMinDecryptionVersion() {
    this._minDecryptionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDecryptionVersionInput() {
    return this._minDecryptionVersion;
  }

  // min_encryption_version - computed: true, optional: true, required: false
  private _minEncryptionVersion?: number; 
  public get minEncryptionVersion() {
    return this.getNumberAttribute('min_encryption_version');
  }
  public set minEncryptionVersion(value: number) {
    this._minEncryptionVersion = value;
  }
  public resetMinEncryptionVersion() {
    this._minEncryptionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minEncryptionVersionInput() {
    return this._minEncryptionVersion;
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

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // supports_decryption - computed: true, optional: false, required: false
  public get supportsDecryption() {
    return this.getBooleanAttribute('supports_decryption');
  }

  // supports_derivation - computed: true, optional: false, required: false
  public get supportsDerivation() {
    return this.getBooleanAttribute('supports_derivation');
  }

  // supports_encryption - computed: true, optional: false, required: false
  public get supportsEncryption() {
    return this.getBooleanAttribute('supports_encryption');
  }

  // supports_signing - computed: true, optional: false, required: false
  public get supportsSigning() {
    return this.getBooleanAttribute('supports_signing');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_plaintext_backup: cdktn.booleanToTerraform(this._allowPlaintextBackup),
      allow_rotation: cdktn.booleanToTerraform(this._allowRotation),
      auto_rotate_period: cdktn.numberToTerraform(this._autoRotatePeriod),
      ciphertext_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._ciphertextWo)),
      ciphertext_wo_version: cdktn.numberToTerraform(this._ciphertextWoVersion),
      context: cdktn.stringToTerraform(this._context),
      deletion_allowed: cdktn.booleanToTerraform(this._deletionAllowed),
      derived: cdktn.booleanToTerraform(this._derived),
      exportable: cdktn.booleanToTerraform(this._exportable),
      hash_function: cdktn.stringToTerraform(this._hashFunction),
      import_version_type: cdktn.stringToTerraform(this._importVersionType),
      min_decryption_version: cdktn.numberToTerraform(this._minDecryptionVersion),
      min_encryption_version: cdktn.numberToTerraform(this._minEncryptionVersion),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      public_key: cdktn.stringToTerraform(this._publicKey),
      type: cdktn.stringToTerraform(this._type),
      version: cdktn.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_plaintext_backup: {
        value: cdktn.booleanToHclTerraform(this._allowPlaintextBackup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_rotation: {
        value: cdktn.booleanToHclTerraform(this._allowRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_rotate_period: {
        value: cdktn.numberToHclTerraform(this._autoRotatePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ciphertext_wo: {
        value: this.markWriteOnlyAttribute(cdktn.stringToHclTerraform(this._ciphertextWo)),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciphertext_wo_version: {
        value: cdktn.numberToHclTerraform(this._ciphertextWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      context: {
        value: cdktn.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_allowed: {
        value: cdktn.booleanToHclTerraform(this._deletionAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      derived: {
        value: cdktn.booleanToHclTerraform(this._derived),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exportable: {
        value: cdktn.booleanToHclTerraform(this._exportable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hash_function: {
        value: cdktn.stringToHclTerraform(this._hashFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_version_type: {
        value: cdktn.stringToHclTerraform(this._importVersionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_decryption_version: {
        value: cdktn.numberToHclTerraform(this._minDecryptionVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_encryption_version: {
        value: cdktn.numberToHclTerraform(this._minEncryptionVersion),
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
      public_key: {
        value: cdktn.stringToHclTerraform(this._publicKey),
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
      version: {
        value: cdktn.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
