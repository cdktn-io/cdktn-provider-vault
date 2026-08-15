# `gcpkmsSecretBackendKey` Submodule <a name="`gcpkmsSecretBackendKey` Submodule" id="@cdktn/provider-vault.gcpkmsSecretBackendKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GcpkmsSecretBackendKey <a name="GcpkmsSecretBackendKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key vault_gcpkms_secret_backend_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer"></a>

```java
import io.cdktn.providers.vault.gcpkms_secret_backend_key.GcpkmsSecretBackendKey;

GcpkmsSecretBackendKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyName(java.lang.String)
    .keyRing(java.lang.String)
    .mount(java.lang.String)
//  .algorithm(java.lang.String)
//  .cryptoKey(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .protectionLevel(java.lang.String)
//  .purpose(java.lang.String)
//  .rotationPeriod(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Name of the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.keyRing">keyRing</a></code> | <code>java.lang.String</code> | GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Algorithm to use for the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | Name of the crypto key to use in GCP KMS. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.purpose">purpose</a></code> | <code>java.lang.String</code> | Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_name GcpkmsSecretBackendKey#key_name}

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.keyRing"></a>

- *Type:* java.lang.String

GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_ring GcpkmsSecretBackendKey#key_ring}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#mount GcpkmsSecretBackendKey#mount}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.algorithm"></a>

- *Type:* java.lang.String

Algorithm to use for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#algorithm GcpkmsSecretBackendKey#algorithm}

---

##### `cryptoKey`<sup>Optional</sup> <a name="cryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.cryptoKey"></a>

- *Type:* java.lang.String

Name of the crypto key to use in GCP KMS.

If the crypto key does not exist,Vault will try to create it. This defaults to the Vault key name if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#crypto_key GcpkmsSecretBackendKey#crypto_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#labels GcpkmsSecretBackendKey#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#namespace GcpkmsSecretBackendKey#namespace}

---

##### `protectionLevel`<sup>Optional</sup> <a name="protectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.protectionLevel"></a>

- *Type:* java.lang.String

Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#protection_level GcpkmsSecretBackendKey#protection_level}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.purpose"></a>

- *Type:* java.lang.String

Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#purpose GcpkmsSecretBackendKey#purpose}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.Initializer.parameter.rotationPeriod"></a>

- *Type:* java.lang.String

Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#rotation_period GcpkmsSecretBackendKey#rotation_period}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetCryptoKey">resetCryptoKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetProtectionLevel">resetProtectionLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetPurpose">resetPurpose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetRotationPeriod">resetRotationPeriod</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetCryptoKey` <a name="resetCryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetCryptoKey"></a>

```java
public void resetCryptoKey()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetProtectionLevel` <a name="resetProtectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetProtectionLevel"></a>

```java
public void resetProtectionLevel()
```

##### `resetPurpose` <a name="resetPurpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetPurpose"></a>

```java
public void resetPurpose()
```

##### `resetRotationPeriod` <a name="resetRotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.resetRotationPeriod"></a>

```java
public void resetRotationPeriod()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GcpkmsSecretBackendKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct"></a>

```java
import io.cdktn.providers.vault.gcpkms_secret_backend_key.GcpkmsSecretBackendKey;

GcpkmsSecretBackendKey.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.gcpkms_secret_backend_key.GcpkmsSecretBackendKey;

GcpkmsSecretBackendKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource"></a>

```java
import io.cdktn.providers.vault.gcpkms_secret_backend_key.GcpkmsSecretBackendKey;

GcpkmsSecretBackendKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport"></a>

```java
import io.cdktn.providers.vault.gcpkms_secret_backend_key.GcpkmsSecretBackendKey;

GcpkmsSecretBackendKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GcpkmsSecretBackendKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GcpkmsSecretBackendKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GcpkmsSecretBackendKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GcpkmsSecretBackendKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GcpkmsSecretBackendKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.nextRotationTimeSeconds">nextRotationTimeSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.primaryVersion">primaryVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationScheduleSeconds">rotationScheduleSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRingInput">keyRingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevelInput">protectionLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purposeInput">purposeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriodInput">rotationPeriodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRing">keyRing</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purpose">purpose</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `nextRotationTimeSeconds`<sup>Required</sup> <a name="nextRotationTimeSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.nextRotationTimeSeconds"></a>

```java
public java.lang.Number getNextRotationTimeSeconds();
```

- *Type:* java.lang.Number

---

##### `primaryVersion`<sup>Required</sup> <a name="primaryVersion" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.primaryVersion"></a>

```java
public java.lang.Number getPrimaryVersion();
```

- *Type:* java.lang.Number

---

##### `rotationScheduleSeconds`<sup>Required</sup> <a name="rotationScheduleSeconds" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationScheduleSeconds"></a>

```java
public java.lang.Number getRotationScheduleSeconds();
```

- *Type:* java.lang.Number

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKeyInput"></a>

```java
public java.lang.String getCryptoKeyInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `keyRingInput`<sup>Optional</sup> <a name="keyRingInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRingInput"></a>

```java
public java.lang.String getKeyRingInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `protectionLevelInput`<sup>Optional</sup> <a name="protectionLevelInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevelInput"></a>

```java
public java.lang.String getProtectionLevelInput();
```

- *Type:* java.lang.String

---

##### `purposeInput`<sup>Optional</sup> <a name="purposeInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purposeInput"></a>

```java
public java.lang.String getPurposeInput();
```

- *Type:* java.lang.String

---

##### `rotationPeriodInput`<sup>Optional</sup> <a name="rotationPeriodInput" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriodInput"></a>

```java
public java.lang.String getRotationPeriodInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.keyRing"></a>

```java
public java.lang.String getKeyRing();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `protectionLevel`<sup>Required</sup> <a name="protectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.protectionLevel"></a>

```java
public java.lang.String getProtectionLevel();
```

- *Type:* java.lang.String

---

##### `purpose`<sup>Required</sup> <a name="purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

---

##### `rotationPeriod`<sup>Required</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GcpkmsSecretBackendKeyConfig <a name="GcpkmsSecretBackendKeyConfig" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.gcpkms_secret_backend_key.GcpkmsSecretBackendKeyConfig;

GcpkmsSecretBackendKeyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .keyName(java.lang.String)
    .keyRing(java.lang.String)
    .mount(java.lang.String)
//  .algorithm(java.lang.String)
//  .cryptoKey(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .namespace(java.lang.String)
//  .protectionLevel(java.lang.String)
//  .purpose(java.lang.String)
//  .rotationPeriod(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Name of the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyRing">keyRing</a></code> | <code>java.lang.String</code> | GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | Algorithm to use for the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | Name of the crypto key to use in GCP KMS. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels to apply to the key. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.protectionLevel">protectionLevel</a></code> | <code>java.lang.String</code> | Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.purpose">purpose</a></code> | <code>java.lang.String</code> | Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt. |
| <code><a href="#@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.rotationPeriod">rotationPeriod</a></code> | <code>java.lang.String</code> | Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Name of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_name GcpkmsSecretBackendKey#key_name}

---

##### `keyRing`<sup>Required</sup> <a name="keyRing" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.keyRing"></a>

```java
public java.lang.String getKeyRing();
```

- *Type:* java.lang.String

GCP KMS key ring resource ID (e.g., 'projects/my-project/locations/us-central1/keyRings/my-ring'). Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#key_ring GcpkmsSecretBackendKey#key_ring}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#mount GcpkmsSecretBackendKey#mount}

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

Algorithm to use for the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#algorithm GcpkmsSecretBackendKey#algorithm}

---

##### `cryptoKey`<sup>Optional</sup> <a name="cryptoKey" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

Name of the crypto key to use in GCP KMS.

If the crypto key does not exist,Vault will try to create it. This defaults to the Vault key name if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#crypto_key GcpkmsSecretBackendKey#crypto_key}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels to apply to the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#labels GcpkmsSecretBackendKey#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#namespace GcpkmsSecretBackendKey#namespace}

---

##### `protectionLevel`<sup>Optional</sup> <a name="protectionLevel" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.protectionLevel"></a>

```java
public java.lang.String getProtectionLevel();
```

- *Type:* java.lang.String

Protection level of the key. Valid values: SOFTWARE, HSM. Defaults to SOFTWARE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#protection_level GcpkmsSecretBackendKey#protection_level}

---

##### `purpose`<sup>Optional</sup> <a name="purpose" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.purpose"></a>

```java
public java.lang.String getPurpose();
```

- *Type:* java.lang.String

Purpose of the key. Valid values: encrypt_decrypt, asymmetric_sign, asymmetric_decrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#purpose GcpkmsSecretBackendKey#purpose}

---

##### `rotationPeriod`<sup>Optional</sup> <a name="rotationPeriod" id="@cdktn/provider-vault.gcpkmsSecretBackendKey.GcpkmsSecretBackendKeyConfig.property.rotationPeriod"></a>

```java
public java.lang.String getRotationPeriod();
```

- *Type:* java.lang.String

Rotation period for the key as a duration string (e.g., '72h', '2592000s' for 30 days). Can be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/resources/gcpkms_secret_backend_key#rotation_period GcpkmsSecretBackendKey#rotation_period}

---



