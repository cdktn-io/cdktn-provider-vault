/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface GcpkmsSecretBackendKeyConfig extends cdktn.TerraformMetaArguments {
  /**
  * Algorithm to use for the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#algorithm GcpkmsSecretBackendKey#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Name of the crypto key to use in GCP KMS. If the crypto key does not exist,Vault will try to create it. This defaults to the Vault key name if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#crypto_key GcpkmsSecretBackendKey#crypto_key}
  */
  readonly cryptoKey?: string;
  /**
  * Name of the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_name GcpkmsSecretBackendKey#key_name}
  */
  readonly keyName: string;
  /**
  * GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_ring GcpkmsSecretBackendKey#key_ring}
  */
  readonly keyRing: string;
  /**
  * Labels to apply to the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#labels GcpkmsSecretBackendKey#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Path where the GCP KMS secrets engine is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#mount GcpkmsSecretBackendKey#mount}
  */
  readonly mount: string;
  /**
  * Target namespace. (requires Enterprise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#namespace GcpkmsSecretBackendKey#namespace}
  */
  readonly namespace?: string;
  /**
  * Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#protection_level GcpkmsSecretBackendKey#protection_level}
  */
  readonly protectionLevel?: string;
  /**
  * Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#purpose GcpkmsSecretBackendKey#purpose}
  */
  readonly purpose?: string;
  /**
  * Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#rotation_period GcpkmsSecretBackendKey#rotation_period}
  */
  readonly rotationPeriod?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key vault_gcpkms_secret_backend_key}
*/
export class GcpkmsSecretBackendKey extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vault_gcpkms_secret_backend_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a GcpkmsSecretBackendKey resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpkmsSecretBackendKey to import
  * @param importFromId The id of the existing GcpkmsSecretBackendKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpkmsSecretBackendKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "vault_gcpkms_secret_backend_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key vault_gcpkms_secret_backend_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpkmsSecretBackendKeyConfig
  */
  public constructor(scope: Construct, id: string, config: GcpkmsSecretBackendKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'vault_gcpkms_secret_backend_key',
      terraformGeneratorMetadata: {
        providerName: 'vault',
        providerVersion: '5.11.0',
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
    this._algorithm = config.algorithm;
    this._cryptoKey = config.cryptoKey;
    this._keyName = config.keyName;
    this._keyRing = config.keyRing;
    this._labels = config.labels;
    this._mount = config.mount;
    this._namespace = config.namespace;
    this._protectionLevel = config.protectionLevel;
    this._purpose = config.purpose;
    this._rotationPeriod = config.rotationPeriod;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // algorithm - computed: true, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // crypto_key - computed: false, optional: true, required: false
  private _cryptoKey?: string; 
  public get cryptoKey() {
    return this.getStringAttribute('crypto_key');
  }
  public set cryptoKey(value: string) {
    this._cryptoKey = value;
  }
  public resetCryptoKey() {
    this._cryptoKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoKeyInput() {
    return this._cryptoKey;
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

  // key_ring - computed: false, optional: false, required: true
  private _keyRing?: string; 
  public get keyRing() {
    return this.getStringAttribute('key_ring');
  }
  public set keyRing(value: string) {
    this._keyRing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingInput() {
    return this._keyRing;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // next_rotation_time_seconds - computed: true, optional: false, required: false
  public get nextRotationTimeSeconds() {
    return this.getNumberAttribute('next_rotation_time_seconds');
  }

  // primary_version - computed: true, optional: false, required: false
  public get primaryVersion() {
    return this.getNumberAttribute('primary_version');
  }

  // protection_level - computed: true, optional: true, required: false
  private _protectionLevel?: string; 
  public get protectionLevel() {
    return this.getStringAttribute('protection_level');
  }
  public set protectionLevel(value: string) {
    this._protectionLevel = value;
  }
  public resetProtectionLevel() {
    this._protectionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionLevelInput() {
    return this._protectionLevel;
  }

  // purpose - computed: true, optional: true, required: false
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  public resetPurpose() {
    this._purpose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // rotation_period - computed: false, optional: true, required: false
  private _rotationPeriod?: string; 
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
  public set rotationPeriod(value: string) {
    this._rotationPeriod = value;
  }
  public resetRotationPeriod() {
    this._rotationPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }

  // rotation_schedule_seconds - computed: true, optional: false, required: false
  public get rotationScheduleSeconds() {
    return this.getNumberAttribute('rotation_schedule_seconds');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      algorithm: cdktn.stringToTerraform(this._algorithm),
      crypto_key: cdktn.stringToTerraform(this._cryptoKey),
      key_name: cdktn.stringToTerraform(this._keyName),
      key_ring: cdktn.stringToTerraform(this._keyRing),
      labels: cdktn.hashMapper(cdktn.stringToTerraform)(this._labels),
      mount: cdktn.stringToTerraform(this._mount),
      namespace: cdktn.stringToTerraform(this._namespace),
      protection_level: cdktn.stringToTerraform(this._protectionLevel),
      purpose: cdktn.stringToTerraform(this._purpose),
      rotation_period: cdktn.stringToTerraform(this._rotationPeriod),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      algorithm: {
        value: cdktn.stringToHclTerraform(this._algorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crypto_key: {
        value: cdktn.stringToHclTerraform(this._cryptoKey),
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
      key_ring: {
        value: cdktn.stringToHclTerraform(this._keyRing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      protection_level: {
        value: cdktn.stringToHclTerraform(this._protectionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      purpose: {
        value: cdktn.stringToHclTerraform(this._purpose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_period: {
        value: cdktn.stringToHclTerraform(this._rotationPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
