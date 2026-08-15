# `ephemeralVaultDatabaseSecret` Submodule <a name="`ephemeralVaultDatabaseSecret` Submodule" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultDatabaseSecret <a name="EphemeralVaultDatabaseSecret" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/database_secret vault_database_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultDatabaseSecret(Construct Scope, string Id, EphemeralVaultDatabaseSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig">EphemeralVaultDatabaseSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig">EphemeralVaultDatabaseSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultDatabaseSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultDatabaseSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultDatabaseSecret.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.clientCertificate">ClientCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.privateKeyType">PrivateKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.rsaPrivateKey">RsaPrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.mountInput">MountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.mount">Mount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `ClientCertificate`<sup>Required</sup> <a name="ClientCertificate" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.clientCertificate"></a>

```csharp
public string ClientCertificate { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyType`<sup>Required</sup> <a name="PrivateKeyType" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.privateKeyType"></a>

```csharp
public string PrivateKeyType { get; }
```

- *Type:* string

---

##### `RsaPrivateKey`<sup>Required</sup> <a name="RsaPrivateKey" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.rsaPrivateKey"></a>

```csharp
public string RsaPrivateKey { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `MountInput`<sup>Optional</sup> <a name="MountInput" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.mountInput"></a>

```csharp
public string MountInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.mount"></a>

```csharp
public string Mount { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultDatabaseSecretConfig <a name="EphemeralVaultDatabaseSecretConfig" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultDatabaseSecretConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string Mount,
    string Name,
    string MountId = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.mount">Mount</a></code> | <code>string</code> | Mount path for the DB engine in Vault. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the role to create credentials against. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Mount`<sup>Required</sup> <a name="Mount" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.mount"></a>

```csharp
public string Mount { get; set; }
```

- *Type:* string

Mount path for the DB engine in Vault.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/database_secret#mount EphemeralVaultDatabaseSecret#mount}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the role to create credentials against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/database_secret#name EphemeralVaultDatabaseSecret#name}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/database_secret#mount_id EphemeralVaultDatabaseSecret#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultDatabaseSecret.EphemeralVaultDatabaseSecretConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/database_secret#namespace EphemeralVaultDatabaseSecret#namespace}

---



