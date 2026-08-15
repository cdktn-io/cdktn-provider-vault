# `ephemeralVaultRadiusAuthLogin` Submodule <a name="`ephemeralVaultRadiusAuthLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultRadiusAuthLogin <a name="EphemeralVaultRadiusAuthLogin" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login vault_radius_auth_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_radius_auth_login.EphemeralVaultRadiusAuthLogin;

EphemeralVaultRadiusAuthLogin.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .mount(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.mount">mount</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to login to. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | RADIUS password for the user. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.username">username</a></code> | <code>java.lang.String</code> | RADIUS username to authenticate. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.mount"></a>

- *Type:* java.lang.String

Unique name of the auth backend to login to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#mount EphemeralVaultRadiusAuthLogin#mount}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.password"></a>

- *Type:* java.lang.String

RADIUS password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#password EphemeralVaultRadiusAuthLogin#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.username"></a>

- *Type:* java.lang.String

RADIUS username to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#username EphemeralVaultRadiusAuthLogin#username}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.mountId"></a>

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#mount_id EphemeralVaultRadiusAuthLogin#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#namespace EphemeralVaultRadiusAuthLogin#namespace}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetMountId">resetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetMountId"></a>

```java
public void resetMountId()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.resetNamespace"></a>

```java
public void resetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isConstruct"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_radius_auth_login.EphemeralVaultRadiusAuthLogin;

EphemeralVaultRadiusAuthLogin.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformElement"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_radius_auth_login.EphemeralVaultRadiusAuthLogin;

EphemeralVaultRadiusAuthLogin.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_radius_auth_login.EphemeralVaultRadiusAuthLogin;

EphemeralVaultRadiusAuthLogin.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.accessor">accessor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.clientToken">clientToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.data">data</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.identityPolicies">identityPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseDuration">leaseDuration</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseId">leaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.metadata">metadata</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mfaRequirement">mfaRequirement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.orphan">orphan</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.renewable">renewable</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tokenPolicies">tokenPolicies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.warnings">warnings</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountIdInput">mountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountInput">mountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mount">mount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountId">mountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `accessor`<sup>Required</sup> <a name="accessor" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.accessor"></a>

```java
public java.lang.String getAccessor();
```

- *Type:* java.lang.String

---

##### `clientToken`<sup>Required</sup> <a name="clientToken" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.clientToken"></a>

```java
public java.lang.String getClientToken();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.data"></a>

```java
public StringMap getData();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `identityPolicies`<sup>Required</sup> <a name="identityPolicies" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.identityPolicies"></a>

```java
public java.util.List<java.lang.String> getIdentityPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `leaseDuration`<sup>Required</sup> <a name="leaseDuration" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseDuration"></a>

```java
public java.lang.Number getLeaseDuration();
```

- *Type:* java.lang.Number

---

##### `leaseId`<sup>Required</sup> <a name="leaseId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.leaseId"></a>

```java
public java.lang.String getLeaseId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.metadata"></a>

```java
public StringMap getMetadata();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `mfaRequirement`<sup>Required</sup> <a name="mfaRequirement" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mfaRequirement"></a>

```java
public java.lang.String getMfaRequirement();
```

- *Type:* java.lang.String

---

##### `orphan`<sup>Required</sup> <a name="orphan" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.orphan"></a>

```java
public IResolvable getOrphan();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `renewable`<sup>Required</sup> <a name="renewable" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.renewable"></a>

```java
public IResolvable getRenewable();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `tokenPolicies`<sup>Required</sup> <a name="tokenPolicies" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tokenPolicies"></a>

```java
public java.util.List<java.lang.String> getTokenPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `warnings`<sup>Required</sup> <a name="warnings" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.warnings"></a>

```java
public java.util.List<java.lang.String> getWarnings();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountIdInput"></a>

```java
public java.lang.String getMountIdInput();
```

- *Type:* java.lang.String

---

##### `mountInput`<sup>Optional</sup> <a name="mountInput" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountInput"></a>

```java
public java.lang.String getMountInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLogin.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultRadiusAuthLoginConfig <a name="EphemeralVaultRadiusAuthLoginConfig" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.Initializer"></a>

```java
import io.cdktn.providers.vault.ephemeral_vault_radius_auth_login.EphemeralVaultRadiusAuthLoginConfig;

EphemeralVaultRadiusAuthLoginConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .mount(java.lang.String)
    .password(java.lang.String)
    .username(java.lang.String)
//  .mountId(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mount">mount</a></code> | <code>java.lang.String</code> | Unique name of the auth backend to login to. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.password">password</a></code> | <code>java.lang.String</code> | RADIUS password for the user. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.username">username</a></code> | <code>java.lang.String</code> | RADIUS username to authenticate. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mountId">mountId</a></code> | <code>java.lang.String</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Target namespace. (requires Enterprise). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `mount`<sup>Required</sup> <a name="mount" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mount"></a>

```java
public java.lang.String getMount();
```

- *Type:* java.lang.String

Unique name of the auth backend to login to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#mount EphemeralVaultRadiusAuthLogin#mount}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

RADIUS password for the user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#password EphemeralVaultRadiusAuthLogin#password}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

RADIUS username to authenticate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#username EphemeralVaultRadiusAuthLogin#username}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.mountId"></a>

```java
public java.lang.String getMountId();
```

- *Type:* java.lang.String

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#mount_id EphemeralVaultRadiusAuthLogin#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultRadiusAuthLogin.EphemeralVaultRadiusAuthLoginConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/radius_auth_login#namespace EphemeralVaultRadiusAuthLogin#namespace}

---



