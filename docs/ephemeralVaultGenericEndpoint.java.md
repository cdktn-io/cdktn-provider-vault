# `ephemeralVaultGenericEndpoint` Submodule <a name="`ephemeralVaultGenericEndpoint` Submodule" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGenericEndpoint <a name="EphemeralVaultGenericEndpoint" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint vault_generic_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_generic_endpoint.EphemeralVaultGenericEndpoint;

EphemeralVaultGenericEndpoint.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .dataJson(java.lang.String)
    .path(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .pathWrapTtl(java.lang.String)
//  .writeFields(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.dataJson">dataJson</a></code> | <code>java.lang.String</code> | JSON-encoded data to write. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.path">path</a></code> | <code>java.lang.String</code> | Full path to the Vault endpoint that will be written. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.pathWrapTtl">pathWrapTtl</a></code> | <code>java.lang.String</code> | The TTL for the wrapped response. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.writeFields">writeFields</a></code> | <code>java.util.List<java.lang.String></code> | Top-level fields returned by the write operation to extract and expose via write_data/write_data_json. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.dataJson"></a>

- *Type:* java.lang.String

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#data_json EphemeralVaultGenericEndpoint#data_json}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.path"></a>

- *Type:* java.lang.String

Full path to the Vault endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path EphemeralVaultGenericEndpoint#path}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#mount_id EphemeralVaultGenericEndpoint#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#namespace EphemeralVaultGenericEndpoint#namespace}

---

##### `pathWrapTtl`<sup>Optional</sup> <a name="pathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.pathWrapTtl"></a>

- *Type:* java.lang.String

The TTL for the wrapped response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path_wrap_ttl EphemeralVaultGenericEndpoint#path_wrap_ttl}

---

##### `writeFields`<sup>Optional</sup> <a name="writeFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.writeFields"></a>

- *Type:* java.util.List<java.lang.String>

Top-level fields returned by the write operation to extract and expose via write_data/write_data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#write_fields EphemeralVaultGenericEndpoint#write_fields}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetPathWrapTtl">resetPathWrapTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetWriteFields">resetWriteFields</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPathWrapTtl` <a name="resetPathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetPathWrapTtl"></a>

```java
public void resetPathWrapTtl()
```

##### `resetWriteFields` <a name="resetWriteFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetWriteFields"></a>

```java
public void resetWriteFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_generic_endpoint.EphemeralVaultGenericEndpoint;

EphemeralVaultGenericEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_generic_endpoint.EphemeralVaultGenericEndpoint;

EphemeralVaultGenericEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_generic_endpoint.EphemeralVaultGenericEndpoint;

EphemeralVaultGenericEndpoint.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeData">writeData</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeDataJson">writeDataJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJsonInput">dataJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtlInput">pathWrapTtlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFieldsInput">writeFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJson">dataJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtl">pathWrapTtl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFields">writeFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `writeData`<sup>Required</sup> <a name="writeData" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeData"></a>

```java
public StringMap getWriteData();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `writeDataJson`<sup>Required</sup> <a name="writeDataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeDataJson"></a>

```java
public java.lang.String getWriteDataJson();
```

- *Type:* java.lang.String

---

##### `dataJsonInput`<sup>Optional</sup> <a name="dataJsonInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJsonInput"></a>

```java
public java.lang.String getDataJsonInput();
```

- *Type:* java.lang.String

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `pathWrapTtlInput`<sup>Optional</sup> <a name="pathWrapTtlInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtlInput"></a>

```java
public java.lang.String getPathWrapTtlInput();
```

- *Type:* java.lang.String

---

##### `writeFieldsInput`<sup>Optional</sup> <a name="writeFieldsInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFieldsInput"></a>

```java
public java.util.List<java.lang.String> getWriteFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJson"></a>

```java
public java.lang.String getDataJson();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `pathWrapTtl`<sup>Required</sup> <a name="pathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtl"></a>

```java
public java.lang.String getPathWrapTtl();
```

- *Type:* java.lang.String

---

##### `writeFields`<sup>Required</sup> <a name="writeFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFields"></a>

```java
public java.util.List<java.lang.String> getWriteFields();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGenericEndpointConfig <a name="EphemeralVaultGenericEndpointConfig" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_generic_endpoint.EphemeralVaultGenericEndpointConfig;

EphemeralVaultGenericEndpointConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .dataJson(java.lang.String)
    .path(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
//  .pathWrapTtl(java.lang.String)
//  .writeFields(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dataJson">dataJson</a></code> | <code>java.lang.String</code> | JSON-encoded data to write. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.path">path</a></code> | <code>java.lang.String</code> | Full path to the Vault endpoint that will be written. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.pathWrapTtl">pathWrapTtl</a></code> | <code>java.lang.String</code> | The TTL for the wrapped response. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.writeFields">writeFields</a></code> | <code>java.util.List<java.lang.String></code> | Top-level fields returned by the write operation to extract and expose via write_data/write_data_json. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dataJson"></a>

```java
public java.lang.String getDataJson();
```

- *Type:* java.lang.String

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#data_json EphemeralVaultGenericEndpoint#data_json}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Full path to the Vault endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path EphemeralVaultGenericEndpoint#path}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#mount_id EphemeralVaultGenericEndpoint#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#namespace EphemeralVaultGenericEndpoint#namespace}

---

##### `pathWrapTtl`<sup>Optional</sup> <a name="pathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.pathWrapTtl"></a>

```java
public java.lang.String getPathWrapTtl();
```

- *Type:* java.lang.String

The TTL for the wrapped response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path_wrap_ttl EphemeralVaultGenericEndpoint#path_wrap_ttl}

---

##### `writeFields`<sup>Optional</sup> <a name="writeFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.writeFields"></a>

```java
public java.util.List<java.lang.String> getWriteFields();
```

- *Type:* java.util.List<java.lang.String>

Top-level fields returned by the write operation to extract and expose via write_data/write_data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#write_fields EphemeralVaultGenericEndpoint#write_fields}

---



