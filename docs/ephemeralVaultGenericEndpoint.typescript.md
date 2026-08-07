# `ephemeralVaultGenericEndpoint` Submodule <a name="`ephemeralVaultGenericEndpoint` Submodule" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralVaultGenericEndpoint <a name="EphemeralVaultGenericEndpoint" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint vault_generic_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer"></a>

```typescript
import { ephemeralVaultGenericEndpoint } from '@cdktn/provider-vault'

new ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint(scope: Construct, id: string, config: EphemeralVaultGenericEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig">EphemeralVaultGenericEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig">EphemeralVaultGenericEndpointConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetMountId` <a name="resetMountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetMountId"></a>

```typescript
public resetMountId(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetPathWrapTtl` <a name="resetPathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetPathWrapTtl"></a>

```typescript
public resetPathWrapTtl(): void
```

##### `resetWriteFields` <a name="resetWriteFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.resetWriteFields"></a>

```typescript
public resetWriteFields(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct"></a>

```typescript
import { ephemeralVaultGenericEndpoint } from '@cdktn/provider-vault'

ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement"></a>

```typescript
import { ephemeralVaultGenericEndpoint } from '@cdktn/provider-vault'

ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralVaultGenericEndpoint } from '@cdktn/provider-vault'

ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeData">writeData</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeDataJson">writeDataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJsonInput">dataJsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountIdInput">mountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtlInput">pathWrapTtlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFieldsInput">writeFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJson">dataJson</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountId">mountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtl">pathWrapTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFields">writeFields</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `writeData`<sup>Required</sup> <a name="writeData" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeData"></a>

```typescript
public readonly writeData: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `writeDataJson`<sup>Required</sup> <a name="writeDataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeDataJson"></a>

```typescript
public readonly writeDataJson: string;
```

- *Type:* string

---

##### `dataJsonInput`<sup>Optional</sup> <a name="dataJsonInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJsonInput"></a>

```typescript
public readonly dataJsonInput: string;
```

- *Type:* string

---

##### `mountIdInput`<sup>Optional</sup> <a name="mountIdInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountIdInput"></a>

```typescript
public readonly mountIdInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `pathWrapTtlInput`<sup>Optional</sup> <a name="pathWrapTtlInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtlInput"></a>

```typescript
public readonly pathWrapTtlInput: string;
```

- *Type:* string

---

##### `writeFieldsInput`<sup>Optional</sup> <a name="writeFieldsInput" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFieldsInput"></a>

```typescript
public readonly writeFieldsInput: string[];
```

- *Type:* string[]

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.dataJson"></a>

```typescript
public readonly dataJson: string;
```

- *Type:* string

---

##### `mountId`<sup>Required</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `pathWrapTtl`<sup>Required</sup> <a name="pathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.pathWrapTtl"></a>

```typescript
public readonly pathWrapTtl: string;
```

- *Type:* string

---

##### `writeFields`<sup>Required</sup> <a name="writeFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.writeFields"></a>

```typescript
public readonly writeFields: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralVaultGenericEndpointConfig <a name="EphemeralVaultGenericEndpointConfig" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.Initializer"></a>

```typescript
import { ephemeralVaultGenericEndpoint } from '@cdktn/provider-vault'

const ephemeralVaultGenericEndpointConfig: ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dataJson">dataJson</a></code> | <code>string</code> | JSON-encoded data to write. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.path">path</a></code> | <code>string</code> | Full path to the Vault endpoint that will be written. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.mountId">mountId</a></code> | <code>string</code> | Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.namespace">namespace</a></code> | <code>string</code> | Target namespace. (requires Enterprise). |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.pathWrapTtl">pathWrapTtl</a></code> | <code>string</code> | The TTL for the wrapped response. |
| <code><a href="#@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.writeFields">writeFields</a></code> | <code>string[]</code> | Top-level fields returned by the write operation to extract and expose via write_data/write_data_json. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `dataJson`<sup>Required</sup> <a name="dataJson" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.dataJson"></a>

```typescript
public readonly dataJson: string;
```

- *Type:* string

JSON-encoded data to write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#data_json EphemeralVaultGenericEndpoint#data_json}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Full path to the Vault endpoint that will be written.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path EphemeralVaultGenericEndpoint#path}

---

##### `mountId`<sup>Optional</sup> <a name="mountId" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.mountId"></a>

```typescript
public readonly mountId: string;
```

- *Type:* string

Terraform ID of the mount resource. Used to defer the provisioning of the ephemeral resource till the apply stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#mount_id EphemeralVaultGenericEndpoint#mount_id}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Target namespace. (requires Enterprise).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#namespace EphemeralVaultGenericEndpoint#namespace}

---

##### `pathWrapTtl`<sup>Optional</sup> <a name="pathWrapTtl" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.pathWrapTtl"></a>

```typescript
public readonly pathWrapTtl: string;
```

- *Type:* string

The TTL for the wrapped response.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#path_wrap_ttl EphemeralVaultGenericEndpoint#path_wrap_ttl}

---

##### `writeFields`<sup>Optional</sup> <a name="writeFields" id="@cdktn/provider-vault.ephemeralVaultGenericEndpoint.EphemeralVaultGenericEndpointConfig.property.writeFields"></a>

```typescript
public readonly writeFields: string[];
```

- *Type:* string[]

Top-level fields returned by the write operation to extract and expose via write_data/write_data_json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/vault/5.10.1/docs/ephemeral-resources/generic_endpoint#write_fields EphemeralVaultGenericEndpoint#write_fields}

---



