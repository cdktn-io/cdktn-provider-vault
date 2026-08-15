# `ephemeralVaultGenericEndpoint` Submodule <a name="`ephemeralVaultGenericEndpoint` Submodule" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGenericEndpoint <a name="EphemeralVaultGenericEndpoint" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_endpoint vault_generic_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultGenericEndpoint(Construct Scope, string Id, EphemeralVaultGenericEndpointConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig">EphemeralVaultGenericEndpointConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig">EphemeralVaultGenericEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toTerraform">ToTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetMountId">ResetMountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetPathWrapTtl">ResetPathWrapTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetWriteFields">ResetWriteFields</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetMountId` <a name="ResetMountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetMountId"></a>

```csharp
private void ResetMountId()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPathWrapTtl` <a name="ResetPathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetPathWrapTtl"></a>

```csharp
private void ResetPathWrapTtl()
```

##### `ResetWriteFields` <a name="ResetWriteFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetWriteFields"></a>

```csharp
private void ResetWriteFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource">IsTerraformEphemeralResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGenericEndpoint.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGenericEndpoint.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformEphemeralResource` <a name="IsTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource"></a>

```csharp
using Io.Cdktn.Providers.Vault;

EphemeralVaultGenericEndpoint.IsTerraformEphemeralResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeData">WriteData</a></code> | <code>Io.Cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeDataJson">WriteDataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJsonInput">DataJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountIdInput">MountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtlInput">PathWrapTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFieldsInput">WriteFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJson">DataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountId">MountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtl">PathWrapTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFields">WriteFields</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `WriteData`<sup>Required</sup> <a name="WriteData" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeData"></a>

```csharp
public StringMap WriteData { get; }
```

- *Type:* Io.Cdktn.StringMap

---

##### `WriteDataJson`<sup>Required</sup> <a name="WriteDataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeDataJson"></a>

```csharp
public string WriteDataJson { get; }
```

- *Type:* string

---

##### `DataJsonInput`<sup>Optional</sup> <a name="DataJsonInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJsonInput"></a>

```csharp
public string DataJsonInput { get; }
```

- *Type:* string

---

##### `MountIdInput`<sup>Optional</sup> <a name="MountIdInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountIdInput"></a>

```csharp
public string MountIdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `PathWrapTtlInput`<sup>Optional</sup> <a name="PathWrapTtlInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtlInput"></a>

```csharp
public string PathWrapTtlInput { get; }
```

- *Type:* string

---

##### `WriteFieldsInput`<sup>Optional</sup> <a name="WriteFieldsInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFieldsInput"></a>

```csharp
public string[] WriteFieldsInput { get; }
```

- *Type:* string[]

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJson"></a>

```csharp
public string DataJson { get; }
```

- *Type:* string

---

##### `MountId`<sup>Required</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountId"></a>

```csharp
public string MountId { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PathWrapTtl`<sup>Required</sup> <a name="PathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtl"></a>

```csharp
public string PathWrapTtl { get; }
```

- *Type:* string

---

##### `WriteFields`<sup>Required</sup> <a name="WriteFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFields"></a>

```csharp
public string[] WriteFields { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGenericEndpointConfig <a name="EphemeralVaultGenericEndpointConfig" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Vault;

new EphemeralVaultGenericEndpointConfig {
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformEphemeralResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    string DataJson,
    string Path,
    string MountId = null,
    string Namespace = null,
    string PathWrapTtl = null,
    string[] WriteFields = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dataJson">DataJson</a></code> | <code>string</code> | JSON-encoded data to write. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.path">Path</a></code> | <code>string</code> | Full path to the Vault endpoint that will be written. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.mountId">MountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.namespace">Namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.pathWrapTtl">PathWrapTtl</a></code> | <code>string</code> | The TTL for the wrapped response. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.writeFields">WriteFields</a></code> | <code>string[]</code> | Top-level fields returned by the write operation to extract and expose via write_data/write_data_json. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.lifecycle"></a>

```csharp
public TerraformEphemeralResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformEphemeralResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `DataJson`<sup>Required</sup> <a name="DataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dataJson"></a>

```csharp
public string DataJson { get; set; }
```

- *Type:* string

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_endpoint#data_json EphemeralVaultGenericEndpoint#data_json}

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Full path to the Vault endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_endpoint#path EphemeralVaultGenericEndpoint#path}

---

##### `MountId`<sup>Optional</sup> <a name="MountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.mountId"></a>

```csharp
public string MountId { get; set; }
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_endpoint#mount_id EphemeralVaultGenericEndpoint#mount_id}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_endpoint#namespace EphemeralVaultGenericEndpoint#namespace}

---

##### `PathWrapTtl`<sup>Optional</sup> <a name="PathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.pathWrapTtl"></a>

```csharp
public string PathWrapTtl { get; set; }
```

- *Type:* string

The TTL for the wrapped response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_endpoint#path_wrap_ttl EphemeralVaultGenericEndpoint#path_wrap_ttl}

---

##### `WriteFields`<sup>Optional</sup> <a name="WriteFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.writeFields"></a>

```csharp
public string[] WriteFields { get; set; }
```

- *Type:* string[]

Top-level fields returned by the write operation to extract and expose via write_data/write_data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.11.0/docs/ephemeral-resources/generic_endpoint#write_fields EphemeralVaultGenericEndpoint#write_fields}

---



