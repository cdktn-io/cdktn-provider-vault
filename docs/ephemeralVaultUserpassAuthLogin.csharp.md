# `ephemeralVaultUserpassAuthLogin` Submodule <a name="`ephemeralVaultUserpassAuthLogin` Submodule" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultUserpassAuthLogin <a name="EphemeralVaultUserpassAuthLogin" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login vault_userpass_auth_login}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultUserpassAuthLogin(Construct Scope, string Id, EphemeralVaultUserpassAuthLoginConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig">EphemeralVaultUserpassAuthLoginConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig">EphemeralVaultUserpassAuthLoginConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultUserpassAuthLogin.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultUserpassAuthLogin.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultUserpassAuthLogin.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.accessor">Accessor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.clientToken">ClientToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.leaseDuration">LeaseDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.renewable">Renewable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.username">Username</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Accessor`<sup>Required</sup> <a name="Accessor" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.accessor"></a>

```csharp
public string Accessor { get; }
```

- *Type:* string

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.clientToken"></a>

```csharp
public string ClientToken { get; }
```

- *Type:* string

---

##### `LeaseDuration`<sup>Required</sup> <a name="LeaseDuration" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.leaseDuration"></a>

```csharp
public double LeaseDuration { get; }
```

- *Type:* double

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Renewable`<sup>Required</sup> <a name="Renewable" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.renewable"></a>

```csharp
public IResolvable Renewable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLogin.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultUserpassAuthLoginConfig <a name="EphemeralVaultUserpassAuthLoginConfig" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultUserpassAuthLoginConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Mount,
    string Password,
    string Username,
    string MountId = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.mount">Mount</a></code> | <code>string</code> | Mount path for the Userpass auth engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.password">Password</a></code> | <code>string</code> | Password to log in with. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.username">Username</a></code> | <code>string</code> | Username to log in with. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Mount path for the Userpass auth engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login#mount EphemeralVaultUserpassAuthLogin#mount}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login#password EphemeralVaultUserpassAuthLogin#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username to log in with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login#username EphemeralVaultUserpassAuthLogin#username}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login#mount_id EphemeralVaultUserpassAuthLogin#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultUserpassAuthLogin.EphemeralVaultUserpassAuthLoginConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/userpass_auth_login#namespace EphemeralVaultUserpassAuthLogin#namespace}

---



