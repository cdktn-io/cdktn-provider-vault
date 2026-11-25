/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TransformTransformationTokenizationImportedKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * If set to `true`, the imported key can be rotated within Vault. Once the key is rotated in Vault, it no longer accepts imported key material. Vault only applies this when the key is imported, so changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allow_rotation TransformTransformationTokenizationImportedKey#allow_rotation}
  */
  readonly allowRotation?: boolean | cdktn.IResolvable;
  /**
  * The list of roles allowed to perform this transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#allowed_roles TransformTransformationTokenizationImportedKey#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * The period in seconds at which the key is rotated automatically. Set to 0 to disable; otherwise it must be at least one hour (3600).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#auto_rotate_period TransformTransformationTokenizationImportedKey#auto_rotate_period}
  */
  readonly autoRotatePeriod?: number;
  /**
  * A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only). Required with `ciphertext_wo_version`. Required to create the transformation, but may be omitted for a transformation adopted with `terraform import`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo TransformTransformationTokenizationImportedKey#ciphertext_wo}
  */
  readonly ciphertextWo?: string;
  /**
  * Version identifier for `ciphertext_wo`. Increment it to import a new ciphertext as a new key version. Required with `ciphertext_wo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#ciphertext_wo_version TransformTransformationTokenizationImportedKey#ciphertext_wo_version}
  */
  readonly ciphertextWoVersion?: number;
  /**
  * If true, this transformation can be deleted. Deletion is blocked while this is false, so it must be applied as `true` before the resource can be destroyed. Vault's import endpoint does not accept this parameter, so it is applied in an update immediately after the key is imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#deletion_allowed TransformTransformationTokenizationImportedKey#deletion_allowed}
  */
  readonly deletionAllowed?: boolean | cdktn.IResolvable;
  /**
  * The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). Vault uses `SHA256` if not set. Vault does not return this value, so it is not verified against the transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#hash_function TransformTransformationTokenizationImportedKey#hash_function}
  */
  readonly hashFunction?: string;
  /**
  * The mapping mode for stored tokenization values (`default` or `exportable`). Vault does not allow this field to be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mapping_mode TransformTransformationTokenizationImportedKey#mapping_mode}
  */
  readonly mappingMode?: string;
  /**
  * The maximum TTL of a token, in seconds. `0` means tokens have no expiration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#max_ttl TransformTransformationTokenizationImportedKey#max_ttl}
  */
  readonly maxTtl?: number;
  /**
  * Minimum key version to use for decryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#min_decryption_version TransformTransformationTokenizationImportedKey#min_decryption_version}
  */
  readonly minDecryptionVersion?: number;
  /**
  * Path where the Transform secret backend is mounted. Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#mount TransformTransformationTokenizationImportedKey#mount}
  */
  readonly mount: string;
  /**
  * Name of the transformation to create. Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#name TransformTransformationTokenizationImportedKey#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#namespace TransformTransformationTokenizationImportedKey#namespace}
  */
  readonly namespace?: string;
  /**
  * The stores that contain tokenized state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#stores TransformTransformationTokenizationImportedKey#stores}
  */
  readonly stores?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key vault_transform_transformation_tokenization_imported_key}
*/
export class TransformTransformationTokenizationImportedKey extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_transformation_tokenization_imported_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TransformTransformationTokenizationImportedKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransformTransformationTokenizationImportedKey to import
  * @param importFromId The id of the existing TransformTransformationTokenizationImportedKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransformTransformationTokenizationImportedKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_transform_transformation_tokenization_imported_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_tokenization_imported_key vault_transform_transformation_tokenization_imported_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformTransformationTokenizationImportedKeyConfig
  */
  public constructor(scope: Construct, id: string, config: TransformTransformationTokenizationImportedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_transformation_tokenization_imported_key',
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
    this._allowRotation = config.allowRotation;
    this._allowedRoles = config.allowedRoles;
    this._autoRotatePeriod = config.autoRotatePeriod;
    this._ciphertextWo = config.ciphertextWo;
    this._ciphertextWoVersion = config.ciphertextWoVersion;
    this._deletionAllowed = config.deletionAllowed;
    this._hashFunction = config.hashFunction;
    this._mappingMode = config.mappingMode;
    this._maxTtl = config.maxTtl;
    this._minDecryptionVersion = config.minDecryptionVersion;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._stores = config.stores;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_rotation - computed: false, optional: true, required: false
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

  // allowed_roles - computed: true, optional: true, required: false
  private _allowedRoles?: string[]; 
  public get allowedRoles() {
    return this.getListAttribute('allowed_roles');
  }
  public set allowedRoles(value: string[]) {
    this._allowedRoles = value;
  }
  public resetAllowedRoles() {
    this._allowedRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRolesInput() {
    return this._allowedRoles;
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

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // mapping_mode - computed: true, optional: true, required: false
  private _mappingMode?: string; 
  public get mappingMode() {
    return this.getStringAttribute('mapping_mode');
  }
  public set mappingMode(value: string) {
    this._mappingMode = value;
  }
  public resetMappingMode() {
    this._mappingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingModeInput() {
    return this._mappingMode;
  }

  // max_ttl - computed: true, optional: true, required: false
  private _maxTtl?: number; 
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }
  public set maxTtl(value: number) {
    this._maxTtl = value;
  }
  public resetMaxTtl() {
    this._maxTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTtlInput() {
    return this._maxTtl;
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

  // stores - computed: true, optional: true, required: false
  private _stores?: string[]; 
  public get stores() {
    return this.getListAttribute('stores');
  }
  public set stores(value: string[]) {
    this._stores = value;
  }
  public resetStores() {
    this._stores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storesInput() {
    return this._stores;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_rotation: cdktn.booleanToTerraform(this._allowRotation),
      allowed_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedRoles),
      auto_rotate_period: cdktn.numberToTerraform(this._autoRotatePeriod),
      ciphertext_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._ciphertextWo)),
      ciphertext_wo_version: cdktn.numberToTerraform(this._ciphertextWoVersion),
      deletion_allowed: cdktn.booleanToTerraform(this._deletionAllowed),
      hash_function: cdktn.stringToTerraform(this._hashFunction),
      mapping_mode: cdktn.stringToTerraform(this._mappingMode),
      max_ttl: cdktn.numberToTerraform(this._maxTtl),
      min_decryption_version: cdktn.numberToTerraform(this._minDecryptionVersion),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      stores: cdktn.listMapper(cdktn.stringToTerraform, false)(this._stores),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_rotation: {
        value: cdktn.booleanToHclTerraform(this._allowRotation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_roles: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      deletion_allowed: {
        value: cdktn.booleanToHclTerraform(this._deletionAllowed),
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
      mapping_mode: {
        value: cdktn.stringToHclTerraform(this._mappingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_ttl: {
        value: cdktn.numberToHclTerraform(this._maxTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_decryption_version: {
        value: cdktn.numberToHclTerraform(this._minDecryptionVersion),
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
      stores: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._stores),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
