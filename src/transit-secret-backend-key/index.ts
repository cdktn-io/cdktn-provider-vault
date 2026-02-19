/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TransitSecretBackendKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * If set, enables taking backup of named key in the plaintext format. Once set, this cannot be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#allow_plaintext_backup TransitSecretBackendKey#allow_plaintext_backup}
  */
  readonly allowPlaintextBackup?: boolean | cdktn.IResolvable;
  /**
  * Amount of seconds the key should live before being automatically rotated. A value of 0 disables automatic rotation for the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#auto_rotate_period TransitSecretBackendKey#auto_rotate_period}
  */
  readonly autoRotatePeriod?: number;
  /**
  * The Transit secret backend the resource belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#backend TransitSecretBackendKey#backend}
  */
  readonly backend: string;
  /**
  * Base64 encoded context for key derivation. Required if derived is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#context TransitSecretBackendKey#context}
  */
  readonly context?: string;
  /**
  * Whether or not to support convergent encryption, where the same plaintext creates the same ciphertext. This requires derived to be set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#convergent_encryption TransitSecretBackendKey#convergent_encryption}
  */
  readonly convergentEncryption?: boolean | cdktn.IResolvable;
  /**
  * Specifies if the key is allowed to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#deletion_allowed TransitSecretBackendKey#deletion_allowed}
  */
  readonly deletionAllowed?: boolean | cdktn.IResolvable;
  /**
  * Specifies if key derivation is to be used. If enabled, all encrypt/decrypt requests to this key must provide a context which is used for key derivation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#derived TransitSecretBackendKey#derived}
  */
  readonly derived?: boolean | cdktn.IResolvable;
  /**
  * Enables keys to be exportable. This allows for all the valid keys in the key ring to be exported. Once set, this cannot be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#exportable TransitSecretBackendKey#exportable}
  */
  readonly exportable?: boolean | cdktn.IResolvable;
  /**
  * The elliptic curve algorithm to use for hybrid signatures. Supported key types are `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, and `ed25519`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#hybrid_key_type_ec TransitSecretBackendKey#hybrid_key_type_ec}
  */
  readonly hybridKeyTypeEc?: string;
  /**
  * The post-quantum algorithm to use for hybrid signatures. Currently, ML-DSA is the only supported key type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#hybrid_key_type_pqc TransitSecretBackendKey#hybrid_key_type_pqc}
  */
  readonly hybridKeyTypePqc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#id TransitSecretBackendKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The key size in bytes for algorithms that allow variable key sizes. Currently only applicable to HMAC; this value must be between 32 and 512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#key_size TransitSecretBackendKey#key_size}
  */
  readonly keySize?: number;
  /**
  * The UUID of the managed key to use when the key type is managed_key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#managed_key_id TransitSecretBackendKey#managed_key_id}
  */
  readonly managedKeyId?: string;
  /**
  * The name of the managed key to use when the key type is managed_key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#managed_key_name TransitSecretBackendKey#managed_key_name}
  */
  readonly managedKeyName?: string;
  /**
  * Minimum key version to use for decryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#min_decryption_version TransitSecretBackendKey#min_decryption_version}
  */
  readonly minDecryptionVersion?: number;
  /**
  * Minimum key version to use for encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#min_encryption_version TransitSecretBackendKey#min_encryption_version}
  */
  readonly minEncryptionVersion?: number;
  /**
  * Name of the encryption key to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#name TransitSecretBackendKey#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#namespace TransitSecretBackendKey#namespace}
  */
  readonly namespace?: string;
  /**
  * The parameter set to use for ML-DSA. Required for ML-DSA and hybrid keys.  Valid values for ML-DSA are `44`, `65`, and `87`. Valid values for SLH-DSA are `slh-dsa-sha2-128s`, `slh-dsa-shake-128s`, `slh-dsa-sha2-128f`, `slh-dsa-shake-128`, `slh-dsa-sha2-192s`, `slh-dsa-shake-192s`, `slh-dsa-sha2-192f`, `slh-dsa-shake-192f`, `slh-dsa-sha2-256s`, `slh-dsa-shake-256s`, `slh-dsa-sha2-256f`, and `slh-dsa-shake-256f`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#parameter_set TransitSecretBackendKey#parameter_set}
  */
  readonly parameterSet?: string;
  /**
  * Specifies the type of key to create. The currently-supported types are: `aes128-gcm96`, `aes256-gcm96` (default), `chacha20-poly1305`, `ed25519`, `ecdsa-p256`, `ecdsa-p384`, `ecdsa-p521`, `hmac`, `rsa-2048`, `rsa-3072`, `rsa-4096`, `managed_key`, `aes128-cmac`, `aes192-cmac`, `aes256-cmac`, `ml-dsa`, `hybrid`, and `slh-dsa`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#type TransitSecretBackendKey#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key vault_transit_secret_backend_key}
*/
export class TransitSecretBackendKey extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transit_secret_backend_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TransitSecretBackendKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitSecretBackendKey to import
  * @param importFromId The id of the existing TransitSecretBackendKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitSecretBackendKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_transit_secret_backend_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.7.0/docs/resources/transit_secret_backend_key vault_transit_secret_backend_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitSecretBackendKeyConfig
  */
  public constructor(scope: Construct, id: string, config: TransitSecretBackendKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transit_secret_backend_key',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.7.0',
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
    this._autoRotatePeriod = config.autoRotatePeriod;
    this._backend = config.backend;
    this._context = config.context;
    this._convergentEncryption = config.convergentEncryption;
    this._deletionAllowed = config.deletionAllowed;
    this._derived = config.derived;
    this._exportable = config.exportable;
    this._hybridKeyTypeEc = config.hybridKeyTypeEc;
    this._hybridKeyTypePqc = config.hybridKeyTypePqc;
    this._id = config.id;
    this._keySize = config.keySize;
    this._managedKeyId = config.managedKeyId;
    this._managedKeyName = config.managedKeyName;
    this._minDecryptionVersion = config.minDecryptionVersion;
    this._minEncryptionVersion = config.minEncryptionVersion;
    this._name = config.name;
    this._namespace = config.namespace;
    this._parameterSet = config.parameterSet;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_plaintext_backup - computed: false, optional: true, required: false
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

  // backend - computed: false, optional: false, required: true
  private _backend?: string; 
  public get backend() {
    return this.getStringAttribute('backend');
  }
  public set backend(value: string) {
    this._backend = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backendInput() {
    return this._backend;
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

  // convergent_encryption - computed: false, optional: true, required: false
  private _convergentEncryption?: boolean | cdktn.IResolvable; 
  public get convergentEncryption() {
    return this.getBooleanAttribute('convergent_encryption');
  }
  public set convergentEncryption(value: boolean | cdktn.IResolvable) {
    this._convergentEncryption = value;
  }
  public resetConvergentEncryption() {
    this._convergentEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get convergentEncryptionInput() {
    return this._convergentEncryption;
  }

  // deletion_allowed - computed: false, optional: true, required: false
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

  // derived - computed: false, optional: true, required: false
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

  // exportable - computed: false, optional: true, required: false
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

  // hybrid_key_type_ec - computed: false, optional: true, required: false
  private _hybridKeyTypeEc?: string; 
  public get hybridKeyTypeEc() {
    return this.getStringAttribute('hybrid_key_type_ec');
  }
  public set hybridKeyTypeEc(value: string) {
    this._hybridKeyTypeEc = value;
  }
  public resetHybridKeyTypeEc() {
    this._hybridKeyTypeEc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridKeyTypeEcInput() {
    return this._hybridKeyTypeEc;
  }

  // hybrid_key_type_pqc - computed: false, optional: true, required: false
  private _hybridKeyTypePqc?: string; 
  public get hybridKeyTypePqc() {
    return this.getStringAttribute('hybrid_key_type_pqc');
  }
  public set hybridKeyTypePqc(value: string) {
    this._hybridKeyTypePqc = value;
  }
  public resetHybridKeyTypePqc() {
    this._hybridKeyTypePqc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridKeyTypePqcInput() {
    return this._hybridKeyTypePqc;
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

  // key_size - computed: false, optional: true, required: false
  private _keySize?: number; 
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }
  public set keySize(value: number) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // keys - computed: true, optional: false, required: false
  private _keys = new cdktn.StringMapList(this, "keys", false);
  public get keys() {
    return this._keys;
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // managed_key_id - computed: false, optional: true, required: false
  private _managedKeyId?: string; 
  public get managedKeyId() {
    return this.getStringAttribute('managed_key_id');
  }
  public set managedKeyId(value: string) {
    this._managedKeyId = value;
  }
  public resetManagedKeyId() {
    this._managedKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedKeyIdInput() {
    return this._managedKeyId;
  }

  // managed_key_name - computed: false, optional: true, required: false
  private _managedKeyName?: string; 
  public get managedKeyName() {
    return this.getStringAttribute('managed_key_name');
  }
  public set managedKeyName(value: string) {
    this._managedKeyName = value;
  }
  public resetManagedKeyName() {
    this._managedKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedKeyNameInput() {
    return this._managedKeyName;
  }

  // min_available_version - computed: true, optional: false, required: false
  public get minAvailableVersion() {
    return this.getNumberAttribute('min_available_version');
  }

  // min_decryption_version - computed: false, optional: true, required: false
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

  // min_encryption_version - computed: false, optional: true, required: false
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

  // parameter_set - computed: false, optional: true, required: false
  private _parameterSet?: string; 
  public get parameterSet() {
    return this.getStringAttribute('parameter_set');
  }
  public set parameterSet(value: string) {
    this._parameterSet = value;
  }
  public resetParameterSet() {
    this._parameterSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterSetInput() {
    return this._parameterSet;
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

  // type - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_plaintext_backup: cdktn.booleanToTerraform(this._allowPlaintextBackup),
      auto_rotate_period: cdktn.numberToTerraform(this._autoRotatePeriod),
      backend: cdktn.stringToTerraform(this._backend),
      context: cdktn.stringToTerraform(this._context),
      convergent_encryption: cdktn.booleanToTerraform(this._convergentEncryption),
      deletion_allowed: cdktn.booleanToTerraform(this._deletionAllowed),
      derived: cdktn.booleanToTerraform(this._derived),
      exportable: cdktn.booleanToTerraform(this._exportable),
      hybrid_key_type_ec: cdktn.stringToTerraform(this._hybridKeyTypeEc),
      hybrid_key_type_pqc: cdktn.stringToTerraform(this._hybridKeyTypePqc),
      id: cdktn.stringToTerraform(this._id),
      key_size: cdktn.numberToTerraform(this._keySize),
      managed_key_id: cdktn.stringToTerraform(this._managedKeyId),
      managed_key_name: cdktn.stringToTerraform(this._managedKeyName),
      min_decryption_version: cdktn.numberToTerraform(this._minDecryptionVersion),
      min_encryption_version: cdktn.numberToTerraform(this._minEncryptionVersion),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      parameter_set: cdktn.stringToTerraform(this._parameterSet),
      type: cdktn.stringToTerraform(this._type),
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
      auto_rotate_period: {
        value: cdktn.numberToHclTerraform(this._autoRotatePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backend: {
        value: cdktn.stringToHclTerraform(this._backend),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      context: {
        value: cdktn.stringToHclTerraform(this._context),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      convergent_encryption: {
        value: cdktn.booleanToHclTerraform(this._convergentEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      hybrid_key_type_ec: {
        value: cdktn.stringToHclTerraform(this._hybridKeyTypeEc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hybrid_key_type_pqc: {
        value: cdktn.stringToHclTerraform(this._hybridKeyTypePqc),
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
      key_size: {
        value: cdktn.numberToHclTerraform(this._keySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      managed_key_id: {
        value: cdktn.stringToHclTerraform(this._managedKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_key_name: {
        value: cdktn.stringToHclTerraform(this._managedKeyName),
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
      parameter_set: {
        value: cdktn.stringToHclTerraform(this._parameterSet),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
