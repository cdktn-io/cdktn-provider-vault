# `ephemeralVaultGcpkmsDecrypt` Submodule <a name="`ephemeralVaultGcpkmsDecrypt` Submodule" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGcpkmsDecrypt <a name="EphemeralVaultGcpkmsDecrypt" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt vault_gcpkms_decrypt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcpkms_decrypt.EphemeralVaultGcpkmsDecrypt;

EphemeralVaultGcpkmsDecrypt.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .ciphertext(java.lang.String)
    .keyName(java.lang.String)
    .mount(java.lang.String)
//  .additionalAuthenticatedData(java.lang.String)
//  .keyVersion(java.lang.Number)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | Base64-encoded ciphertext to decrypt. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.keyName">keyName</a></code> | <code>java.lang.String</code> | Name of the Vault key to use for decryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | Base64-encoded additional authenticated data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | Version of the key to use for decryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.ciphertext"></a>

- *Type:* java.lang.String

Base64-encoded ciphertext to decrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#ciphertext EphemeralVaultGcpkmsDecrypt#ciphertext}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.keyName"></a>

- *Type:* java.lang.String

Name of the Vault key to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#key_name EphemeralVaultGcpkmsDecrypt#key_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#mount EphemeralVaultGcpkmsDecrypt#mount}

---

##### `additionalAuthenticatedData`<sup>Optional</sup> <a name="additionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.additionalAuthenticatedData"></a>

- *Type:* java.lang.String

Base64-encoded additional authenticated data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#additional_authenticated_data EphemeralVaultGcpkmsDecrypt#additional_authenticated_data}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.keyVersion"></a>

- *Type:* java.lang.Number

Version of the key to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#key_version EphemeralVaultGcpkmsDecrypt#key_version}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#mount_id EphemeralVaultGcpkmsDecrypt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#namespace EphemeralVaultGcpkmsDecrypt#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.resetAdditionalAuthenticatedData">resetAdditionalAuthenticatedData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.resetKeyVersion">resetKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAdditionalAuthenticatedData` <a name="resetAdditionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.resetAdditionalAuthenticatedData"></a>

```java
public void resetAdditionalAuthenticatedData()
```

##### `resetKeyVersion` <a name="resetKeyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.resetKeyVersion"></a>

```java
public void resetKeyVersion()
```

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcpkms_decrypt.EphemeralVaultGcpkmsDecrypt;

EphemeralVaultGcpkmsDecrypt.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcpkms_decrypt.EphemeralVaultGcpkmsDecrypt;

EphemeralVaultGcpkmsDecrypt.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcpkms_decrypt.EphemeralVaultGcpkmsDecrypt;

EphemeralVaultGcpkmsDecrypt.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.additionalAuthenticatedDataInput">additionalAuthenticatedDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.ciphertextInput">ciphertextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.keyVersionInput">keyVersionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

##### `additionalAuthenticatedDataInput`<sup>Optional</sup> <a name="additionalAuthenticatedDataInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.additionalAuthenticatedDataInput"></a>

```java
public java.lang.String getAdditionalAuthenticatedDataInput();
```

- *Type:* java.lang.String

---

##### `ciphertextInput`<sup>Optional</sup> <a name="ciphertextInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.ciphertextInput"></a>

```java
public java.lang.String getCiphertextInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `keyVersionInput`<sup>Optional</sup> <a name="keyVersionInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.keyVersionInput"></a>

```java
public java.lang.Number getKeyVersionInput();
```

- *Type:* java.lang.Number

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `additionalAuthenticatedData`<sup>Required</sup> <a name="additionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.additionalAuthenticatedData"></a>

```java
public java.lang.String getAdditionalAuthenticatedData();
```

- *Type:* java.lang.String

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.ciphertext"></a>

```java
public java.lang.String getCiphertext();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `keyVersion`<sup>Required</sup> <a name="keyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.keyVersion"></a>

```java
public java.lang.Number getKeyVersion();
```

- *Type:* java.lang.Number

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecrypt.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGcpkmsDecryptConfig <a name="EphemeralVaultGcpkmsDecryptConfig" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_gcpkms_decrypt.EphemeralVaultGcpkmsDecryptConfig;

EphemeralVaultGcpkmsDecryptConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .ciphertext(java.lang.String)
    .keyName(java.lang.String)
    .mount(java.lang.String)
//  .additionalAuthenticatedData(java.lang.String)
//  .keyVersion(java.lang.Number)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | Base64-encoded ciphertext to decrypt. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | Name of the Vault key to use for decryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Path where the GCP KMS secrets engine is mounted. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | Base64-encoded additional authenticated data. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.keyVersion">keyVersion</a></code> | <code>java.lang.Number</code> | Version of the key to use for decryption. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.ciphertext"></a>

```java
public java.lang.String getCiphertext();
```

- *Type:* java.lang.String

Base64-encoded ciphertext to decrypt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#ciphertext EphemeralVaultGcpkmsDecrypt#ciphertext}

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

Name of the Vault key to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#key_name EphemeralVaultGcpkmsDecrypt#key_name}

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Path where the GCP KMS secrets engine is mounted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#mount EphemeralVaultGcpkmsDecrypt#mount}

---

##### `additionalAuthenticatedData`<sup>Optional</sup> <a name="additionalAuthenticatedData" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.additionalAuthenticatedData"></a>

```java
public java.lang.String getAdditionalAuthenticatedData();
```

- *Type:* java.lang.String

Base64-encoded additional authenticated data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#additional_authenticated_data EphemeralVaultGcpkmsDecrypt#additional_authenticated_data}

---

##### `keyVersion`<sup>Optional</sup> <a name="keyVersion" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.keyVersion"></a>

```java
public java.lang.Number getKeyVersion();
```

- *Type:* java.lang.Number

Version of the key to use for decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#key_version EphemeralVaultGcpkmsDecrypt#key_version}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#mount_id EphemeralVaultGcpkmsDecrypt#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGcpkmsDecrypt.EphemeralVaultGcpkmsDecryptConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/gcpkms_decrypt#namespace EphemeralVaultGcpkmsDecrypt#namespace}

---



