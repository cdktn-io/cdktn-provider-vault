/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface TransformTransformationFpeImportedKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * The list of roles allowed to perform this transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#allowed_roles TransformTransformationFpeImportedKey#allowed_roles}
  */
  readonly allowedRoles?: string[];
  /**
  * A base64-encoded string containing the wrapped ephemeral AES key and the encrypted 256-bit AES key material (write-only). Required with `ciphertext_wo_version`. Required to create the transformation, but may be omitted for a transformation adopted with `terraform import`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#ciphertext_wo TransformTransformationFpeImportedKey#ciphertext_wo}
  */
  readonly ciphertextWo?: string;
  /**
  * Version identifier for `ciphertext_wo`. Vault imports ciphertext on create; changing this value replaces the transformation. Removing it does not replace the resource. Required with `ciphertext_wo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#ciphertext_wo_version TransformTransformationFpeImportedKey#ciphertext_wo_version}
  */
  readonly ciphertextWoVersion?: number;
  /**
  * If true, this transformation can be deleted. Deletion is blocked while this is false, so it must be applied as `true` before the resource can be destroyed. Vault's import endpoint does not accept this parameter, so it is applied in an update immediately after the key is imported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#deletion_allowed TransformTransformationFpeImportedKey#deletion_allowed}
  */
  readonly deletionAllowed?: boolean | cdktn.IResolvable;
  /**
  * The hash function used for the RSA-OAEP step of creating the ciphertext (`SHA1`, `SHA224`, `SHA256`, `SHA384`, `SHA512`). Vault uses `SHA256` if not set. Vault does not return this value, so it is not verified against the transformation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#hash_function TransformTransformationFpeImportedKey#hash_function}
  */
  readonly hashFunction?: string;
  /**
  * The maximum tweak length in bytes (0-32). If the value is 0, the tweak length can be any value from 0 to 32 bytes. Vault does not allow this field to be changed after creation, so changing it returns an error from Vault. Requires Vault 2.2.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#max_tweak_len TransformTransformationFpeImportedKey#max_tweak_len}
  */
  readonly maxTweakLen?: number;
  /**
  * Path where the Transform secret backend is mounted. Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#mount TransformTransformationFpeImportedKey#mount}
  */
  readonly mount: string;
  /**
  * Name of the transformation to create. Changing this field replaces this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#name TransformTransformationFpeImportedKey#name}
  */
  readonly name: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#namespace TransformTransformationFpeImportedKey#namespace}
  */
  readonly namespace?: string;
  /**
  * The name of the template to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#template TransformTransformationFpeImportedKey#template}
  */
  readonly template: string;
  /**
  * The source of the tweak value (`supplied`, `generated` or `internal`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#tweak_source TransformTransformationFpeImportedKey#tweak_source}
  */
  readonly tweakSource?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key vault_transform_transformation_fpe_imported_key}
*/
export class TransformTransformationFpeImportedKey extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_transform_transformation_fpe_imported_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a TransformTransformationFpeImportedKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransformTransformationFpeImportedKey to import
  * @param importFromId The id of the existing TransformTransformationFpeImportedKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransformTransformationFpeImportedKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_transform_transformation_fpe_imported_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.14.0/docs/resources/transform_transformation_fpe_imported_key vault_transform_transformation_fpe_imported_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformTransformationFpeImportedKeyConfig
  */
  public constructor(scope: Construct, id: string, config: TransformTransformationFpeImportedKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_transform_transformation_fpe_imported_key',
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
    this._allowedRoles = config.allowedRoles;
    this._ciphertextWo = config.ciphertextWo;
    this._ciphertextWoVersion = config.ciphertextWoVersion;
    this._deletionAllowed = config.deletionAllowed;
    this._hashFunction = config.hashFunction;
    this._maxTweakLen = config.maxTweakLen;
    this._mount = config.mount;
    this._name = config.name;
    this._namespace = config.namespace;
    this._template = config.template;
    this._tweakSource = config.tweakSource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fpe_algorithm - computed: true, optional: false, required: false
  public get fpeAlgorithm() {
    return this.getStringAttribute('fpe_algorithm');
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

  // max_tweak_len - computed: true, optional: true, required: false
  private _maxTweakLen?: number; 
  public get maxTweakLen() {
    return this.getNumberAttribute('max_tweak_len');
  }
  public set maxTweakLen(value: number) {
    this._maxTweakLen = value;
  }
  public resetMaxTweakLen() {
    this._maxTweakLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTweakLenInput() {
    return this._maxTweakLen;
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

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // tweak_source - computed: true, optional: true, required: false
  private _tweakSource?: string; 
  public get tweakSource() {
    return this.getStringAttribute('tweak_source');
  }
  public set tweakSource(value: string) {
    this._tweakSource = value;
  }
  public resetTweakSource() {
    this._tweakSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tweakSourceInput() {
    return this._tweakSource;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_roles: cdktn.listMapper(cdktn.stringToTerraform, false)(this._allowedRoles),
      ciphertext_wo: this.markWriteOnlyAttribute(cdktn.stringToTerraform(this._ciphertextWo)),
      ciphertext_wo_version: cdktn.numberToTerraform(this._ciphertextWoVersion),
      deletion_allowed: cdktn.booleanToTerraform(this._deletionAllowed),
      hash_function: cdktn.stringToTerraform(this._hashFunction),
      max_tweak_len: cdktn.numberToTerraform(this._maxTweakLen),
      mount: cdktn.stringToTerraform(this._mount),
      name: cdktn.stringToTerraform(this._name),
      namespace: cdktn.stringToTerraform(this._namespace),
      template: cdktn.stringToTerraform(this._template),
      tweak_source: cdktn.stringToTerraform(this._tweakSource),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_roles: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._allowedRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      max_tweak_len: {
        value: cdktn.numberToHclTerraform(this._maxTweakLen),
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
      template: {
        value: cdktn.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tweak_source: {
        value: cdktn.stringToHclTerraform(this._tweakSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
